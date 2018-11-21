import CryptoUtils from './CryptoUtils';
import superagent from "superagent";
import moment from 'moment';

export default class OAuthClient {

  static H_AUTHORIZATION = 'Authorization';
  static H_X_AUTHORIZATION_AHOI = 'X-Authorization-Ahoi';
  static TOKEN_GRANTTIME_REDUCTION_IN_SECONDS = 3;
  static MAX_RETRIES = 10;

  constructor(url) {
    this.url = url;
    this.timeout = 5000;
    this.clientId = null;
    this.clientSecret = null;
    this.appSecretIv = null;
    this.appSecretKey = null;
    this.clearPreviousRequest();
  }

  clearPreviousRequest = function () {
    this.accessToken = null;
    this.statusCode = 0;
    this.responseBody = null;
    this.expireTime = null;
    this.errorCounter = 0;
  };

  setTimeout(timeout) {
    this.timeout = timeout;
  };

  getTimeout() {
    return this.timeout;
  };

  setClientCredentials(clientId, clientSecret) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  };

  setAppSecret(appSecretKey, appSecretIv) {
    this.appSecretKey = CryptoUtils.encodeUrlSafeBase64ToBase64(appSecretKey);
    this.appSecretIv = CryptoUtils.encodeUrlSafeBase64ToBase64(appSecretIv);
  };

  setInstallationId(installationId) {
    this.clearPreviousRequest();
    this.installationId = installationId;
  };

  areClientCredentialsSet() {
    return (this.clientId && this.clientSecret);
  };

  isInstallationIdSet() {
    return (this.installationId && this.appSecretIv && this.appSecretKey);
  };

  createAuthorizationHeaderString(installationId) {
    let nonce = CryptoUtils.guid();
    let formattedTimestamp = moment(Date.now()).toISOString();
    let ahoiAuthorizationDto = {"installationId": installationId, "nonce": nonce, "timestamp": formattedTimestamp};
    return JSON.stringify(ahoiAuthorizationDto);
  };

  /**
   * Sets the required authentication headers and requests a token at the configured oauth server.
   * @param callback The function that is executed as soon as the request finishes.
   */
  requestToken(callback) {
    let _this = this;

    // Build the required authentication headers.
    let headers = {};
    if (this.areClientCredentialsSet()) {
      let authData = this.clientId + ":" + this.clientSecret;
      let encodedBytes = CryptoUtils.encodeStringToBase64(authData);
      headers[OAuthClient.H_AUTHORIZATION] = "Basic " + encodedBytes;
    }
    if (this.isInstallationIdSet()) {
      let xAuthHeader = this.createAuthorizationHeaderString(this.installationId);
      // TODO: Algorithm is hardcoded as  AES-CBC for now, should possibly be adjusted, if an algorithm selection/configuration is actually required.
      xAuthHeader = CryptoUtils.encryptDataBase64UrlSafe(CryptoUtils.SYMMETRIC_ALGORITHMS.AES_CBC, xAuthHeader, this.appSecretKey, this.appSecretIv);
      headers[OAuthClient.H_X_AUTHORIZATION_AHOI] = xAuthHeader;
    }

    // Build and send the request.
    let request = superagent("POST", this.url);
    request.timeout(this.timeout);
    request.set(headers);
    request.end((error, response) => {
      if (callback) {
        if (error) {
          callback(error);
        } else {
          _this.parseResponse(response);
          callback(null);
        }
      }
    });
  };

  parseResponse(response) {
    this.statusCode = response.status;
    let result = response.body;
    if (this.statusCode === 200) {
      let expiresIn = result.expires_in;
      this.accessToken = result.access_token;
      this.expireTime = moment(Date.now()).add(expiresIn - OAuthClient.TOKEN_GRANTTIME_REDUCTION_IN_SECONDS, 'seconds');
    } else {
      this.accessToken = null;
      this.expireTime = moment(Date.now()).subtract(1, 'second');
    }
  };

  /**
   * Access point for the token acquisition.
   * @param callback The function that is executed after the token is acquired. The token will be given to this function.
   */
  getAccessToken(callback) {
    this.errorCounter = 0;
    this._getAccessToken(callback);
  };

  /**
   * The internal getAccessToken method. This method calls itself until a valid token is acquired or the maximum number
   * of retries is reached. As soon as a valid token is acquired, the callback function is called with this token.
   *
   * @param callback The callback that is called as soon as a valid token is acquired or the max retries are reached.
   * @private
   */
  _getAccessToken(callback) {
    if (this.statusCode !== 200 || this.accessToken === null || this.accessToken === '' || this.expireTime.isBefore(Date.now())) {
      if (this.errorCounter > OAuthClient.MAX_RETRIES) {
        callback(null);
      } else {
        this.requestToken((error) => {
          this._getAccessToken(callback);
        });
      }
      this.errorCounter++;
    } else {
      callback(this.accessToken);
    }
  };
}
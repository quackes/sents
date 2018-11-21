import CryptoUtils from './CryptoUtils';

/**
 * A helper class that handles the session key and provides the
 * session security header.
 */
export default class SessionSecurityHelper {

  static HEADER_X_AHOI_SESSION_SECURITY = "x-ahoi-session-security";

  constructor(registrationApi) {
    this.registrationApi = registrationApi;
    this.lastUsedSessionKey = null;
  }

  fetchPublicKey(callback) {
    this.registrationApi.getRegistrationPublicKey((error, data, response) => {
      if (error) throw error;
      callback(data);
    });
  }

  createSessionSecurityHeaderString(jsonPublicKeyResponse) {
    // As soon as you have the public  key, create the security session header.
    this.lastUsedSessionKey = CryptoUtils.generateSymmetricKey();
    let encryptedSessionKey = CryptoUtils.encryptKey(CryptoUtils.ASYMMETRIC_ALGORITHMS.RSA_2048_SHA1, jsonPublicKeyResponse.publicKey.value, this.lastUsedSessionKey);

    let sessionSecurityHeader = {};
    sessionSecurityHeader.keySpecification = 'AES';
    sessionSecurityHeader.publicKeyId = jsonPublicKeyResponse.keyId;
    sessionSecurityHeader.sessionKey = CryptoUtils.encodeToUrlSafeBase64(encryptedSessionKey);

    let jsonSessionSecurityHeader = JSON.stringify(sessionSecurityHeader);
    return CryptoUtils.encodeToUrlSafeBase64(jsonSessionSecurityHeader);
  }

  applySessionSecurity(headerParams, callback) {
    let _this = this;
    // Fetch the public key
    this.fetchPublicKey((jsonPublicKeyResponse) => {
      // As soon as the public key is available, build the session security header.
      let sessionSecurityHeader = _this.createSessionSecurityHeaderString(jsonPublicKeyResponse);
      headerParams[SessionSecurityHelper.HEADER_X_AHOI_SESSION_SECURITY] = sessionSecurityHeader;
      callback();
    });
  }

  encryptWithSessionKey(data) {
    if (this.lastUsedSessionKey === null) {
      throw new Error("lastUsedSessionKey");
    }
    // Use a default iv that contains 16 zero bytes.
    let defaultIv = null;
    return CryptoUtils.encryptDataBase64UrlSafe(CryptoUtils.SYMMETRIC_ALGORITHMS.AES_CBC, data, this.lastUsedSessionKey, defaultIv);
  }

  decryptWithSessionKey(data) {
    if (this.lastUsedSessionKey === null) {
      throw new Error("lastUsedSessionKey");
    }
    // Use a default iv that contains 16 zero bytes.
    let defaultIv = null;
    return CryptoUtils.decryptDataBase64UrlSafe(CryptoUtils.SYMMETRIC_ALGORITHMS.AES_CBC, data, this.lastUsedSessionKey, defaultIv);
  }
}
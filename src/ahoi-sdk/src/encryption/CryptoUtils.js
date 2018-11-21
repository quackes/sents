import * as Base64Url from 'base64url';
import * as CryptoJS from 'crypto-js';
import NodeRSA from 'node-rsa';

/**
 * A set of utility functions for convenient access to certain cryptographic
 * operations.
 */
export default class CryptoUtils {

  static SYMMETRIC_ALGORITHMS = {
    AES_CBC: 'AES_CBC'
  };

  static ASYMMETRIC_ALGORITHMS = {
    RSA_2048_SHA1: {name: 'RSA_2048_SHA1', format: 'pkcs8-public', encryptionScheme:'pkcs1_oaep', signingScheme: 'pkcs1-sha1'}
  };

  static SHARED_SECRET_SIZE = 256 / 32;
  static SALT_SECRET_SIZE = 256 / 32;
  static ITERATION_COUNT = 137;
  static KEY_SIZE = 256 / 32;
  static DEFAULT_IV_SIZE = 16;

  static generateSymmetricKey() {
    // 256 bit (i.e. 8 words)
    let sharedSecret = CryptoJS.lib.WordArray.random(CryptoUtils.SHARED_SECRET_SIZE);
    // 256 bit (i.e. 8 words)
    let salt = CryptoJS.lib.WordArray.random(CryptoUtils.SALT_SECRET_SIZE);
    let iterations = CryptoUtils.ITERATION_COUNT;
    // 256 bit key (i.e. 8 words)
    let keySize = CryptoUtils.KEY_SIZE;
    // The default user is SHA1. Change this, if necessary.
    let key = CryptoJS.PBKDF2(sharedSecret, salt, {
      keySize: keySize,
      iterations: iterations
    });
    return CryptoJS.enc.Base64.stringify(key);
  }

  static encryptKey(algorithm, publicKey, keyToEncrypt) {
    let rsaPublicKey = Buffer.from(publicKey);
    if (algorithm === CryptoUtils.ASYMMETRIC_ALGORITHMS.RSA_2048_SHA1) {
      let usedAlgorithm = CryptoUtils.ASYMMETRIC_ALGORITHMS.RSA_2048_SHA1;
      let key = NodeRSA(rsaPublicKey, usedAlgorithm.format, {encryptionScheme: usedAlgorithm.encryptionScheme, signingScheme: usedAlgorithm.signingScheme});
      return key.encrypt(keyToEncrypt, 'buffer', 'base64');
    }
    return null;
  }

  static getIvWordArray(stringIv) {
    if (stringIv !== null) {
      return CryptoJS.enc.Base64.parse(stringIv);
    } else {
      // Use a default iv with zero bytes, if no iv is provided.
      let byteArray = new Uint8Array(CryptoUtils.DEFAULT_IV_SIZE);
      return CryptoJS.lib.WordArray.create(byteArray, byteArray.length);
    }
  }

  static encryptData(algorithm, data, symmetricKey, stringIv) {
    let dataWordArray = CryptoJS.enc.Utf8.parse(data);
    let keyWordArray = CryptoJS.enc.Base64.parse(symmetricKey);
    let ivWordArray = this.getIvWordArray(stringIv);

    if (algorithm === CryptoUtils.SYMMETRIC_ALGORITHMS.AES_CBC) {
      let encrypted = CryptoJS.AES.encrypt(dataWordArray, keyWordArray, {iv: ivWordArray});
      return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
    }
    return null;
  }

  static decryptData(algorithm, data, symmetricKey, stringIv) {
    let keyWordArray = CryptoJS.enc.Base64.parse(symmetricKey);
    let ivWordArray = this.getIvWordArray(stringIv);

    if (algorithm === CryptoUtils.SYMMETRIC_ALGORITHMS.AES_CBC) {
      let decrypted = CryptoJS.AES.decrypt(data, keyWordArray, {iv: ivWordArray});
      return decrypted.toString(CryptoJS.enc.Utf8);
    }
    return null;
  }

  static guid() {
    return CryptoJS.lib.WordArray.random(36).toString(CryptoJS.enc.Hex);
  }

  /**
   * Transforms the given string to a regular bse64 string (not url safe!).
   * @param data The string to transform.
   * @returns {*|string} The string in base64 format (not url safe!).
   */
  static encodeStringToBase64(data) {
    // Transform the data to a url safe base64 string and then decode it to a regular base64 string.
    return Base64Url.toBase64(Base64Url.encode((data)));
  }

  static encodeToUrlSafeBase64(data) {
    // Transform the data to a url safe base64 string and then decode it to a regular base64 string.
    return Base64Url.encode(data);
  }

  static decodeFromUrlSafeBase64(data) {
    return Base64Url.decode(data);
  }

  /**
   * Transforms a url safe base64 string to a regular base64 string.
   * @param data The base 64 url safe string.
   * @returns {*|string} A regular base64 string.
   */
  static encodeUrlSafeBase64ToBase64(data) {
    return Base64Url.toBase64(data);
  }

  /**
   * Transforms a regular base64 string to a url safe base64 string.
   * @param data The regular 64 string.
   * @returns {*|string} A url safe base64 string.
   */
  static encodeBase64ToUrlSafeBase64(data) {
    return Base64Url.fromBase64(data);
  }

  /**
   * Encrypts the given data by using the given key and iv.
   * @param algorithm
   * @param data The data to encrypt in utf-8 format.
   * @param symmetricKey The key to use in regular base 64 format.
   * @param iv The iv to use in regular base 64 format.
   * @returns {*|string} A regular base64 string containing the encrypted data.
   */
  static encryptDataBase64UrlSafe(algorithm, data, symmetricKey, iv) {
    return this.encodeBase64ToUrlSafeBase64(this.encryptData(algorithm, data, symmetricKey, iv));
  }

  static decryptDataBase64UrlSafe(algorithm, data, symmetricKey, iv) {
    return this.decryptData(algorithm, this.encodeUrlSafeBase64ToBase64(data), symmetricKey, iv);
  }
}
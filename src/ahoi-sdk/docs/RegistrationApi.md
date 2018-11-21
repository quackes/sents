# SwaggerJsClient.RegistrationApi

All URIs are relative to *https://localhost/ahoi/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteRegistration**](RegistrationApi.md#deleteRegistration) | **DELETE** /registration | Delete the user context for the current token.
[**getJsonWebKey**](RegistrationApi.md#getJsonWebKey) | **GET** /registration/jwk | Request API jwk public key
[**getRegistrationPublicKey**](RegistrationApi.md#getRegistrationPublicKey) | **GET** /registration/keys | Request API public key
[**register**](RegistrationApi.md#register) | **POST** /registration | User registration


<a name="deleteRegistration"></a>
# **deleteRegistration**
> deleteRegistration()

Delete the user context for the current token.

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.RegistrationApi();

apiInstance.deleteRegistration((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getJsonWebKey"></a>
# **getJsonWebKey**
> JwkJwkPublicKey getJsonWebKey()

Request API jwk public key

A valid API public key will be returned in JWK format to be used to encrypt registration data

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.RegistrationApi();

apiInstance.getJsonWebKey((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**JwkJwkPublicKey**](JwkJwkPublicKey.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRegistrationPublicKey"></a>
# **getRegistrationPublicKey**
> RegistrationPublicKey getRegistrationPublicKey()

Request API public key

A valid API public key will be returned to be used to encrypt registration data

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.RegistrationApi();

apiInstance.getRegistrationPublicKey((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RegistrationPublicKey**](RegistrationPublicKey.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="register"></a>
# **register**
> RegistrationResponse register()

User registration

Registers a user with AHOI

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.RegistrationApi();

apiInstance.register((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RegistrationResponse**](RegistrationResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


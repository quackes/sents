# SwaggerJsClient.SecurityApi

All URIs are relative to *https://localhost/ahoi/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSecurity**](SecurityApi.md#getSecurity) | **GET** /accesses/{accessId}/accounts/{accountId}/securities/{securityId} | Get security
[**listSecurities**](SecurityApi.md#listSecurities) | **GET** /accesses/{accessId}/accounts/{accountId}/securities | List securities for account


<a name="getSecurity"></a>
# **getSecurity**
> Security getSecurity(accessId, accountId, securityId)

Get security

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.SecurityApi();

let accessId = "accessId_example"; // String | 

let accountId = "accountId_example"; // String | The **accountId** for which to retrieve securities

let securityId = "securityId_example"; // String | The **securityId** for the security to retrieve


apiInstance.getSecurity(accessId, accountId, securityId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessId** | **String**|  | 
 **accountId** | **String**| The **accountId** for which to retrieve securities | 
 **securityId** | **String**| The **securityId** for the security to retrieve | 

### Return type

[**Security**](Security.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listSecurities"></a>
# **listSecurities**
> [Security] listSecurities(accessId, accountId, opts)

List securities for account

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.SecurityApi();

let accessId = "accessId_example"; // String | 

let accountId = "accountId_example"; // String | The **accountId** for which to retrieve securities

let opts = { 
  'maxAge': 789 // Number | Optional - defines maximum age (in seconds) of cached account data provided by the bank.         A \"maxAge\" of 3600 will not trigger an update of the account securities, when last         refresh has been done 2000 seconds ago.
};

apiInstance.listSecurities(accessId, accountId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessId** | **String**|  | 
 **accountId** | **String**| The **accountId** for which to retrieve securities | 
 **maxAge** | **Number**| Optional - defines maximum age (in seconds) of cached account data provided by the bank.         A \&quot;maxAge\&quot; of 3600 will not trigger an update of the account securities, when last         refresh has been done 2000 seconds ago. | [optional] 

### Return type

[**[Security]**](Security.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


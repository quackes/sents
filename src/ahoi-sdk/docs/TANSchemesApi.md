# SwaggerJsClient.TANSchemesApi

All URIs are relative to *https://localhost/ahoi/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCurrentTanMedia**](TANSchemesApi.md#getCurrentTanMedia) | **GET** /accesses/{accessId}/currenttanmedia | Get current TAN media.
[**getCurrentTanScheme**](TANSchemesApi.md#getCurrentTanScheme) | **GET** /accesses/{accessId}/currenttanscheme | Get current TAN scheme.
[**getTanSchemes**](TANSchemesApi.md#getTanSchemes) | **GET** /accesses/{accessId}/tanschemes | List TAN schemes for access
[**putCurrentTanMedia**](TANSchemesApi.md#putCurrentTanMedia) | **PUT** /accesses/{accessId}/currenttanmedia/{tanMediaId} | Update current TAN media.
[**putCurrentTanScheme**](TANSchemesApi.md#putCurrentTanScheme) | **PUT** /accesses/{accessId}/currenttanscheme/{tanSchemeId} | Update current TAN scheme.


<a name="getCurrentTanMedia"></a>
# **getCurrentTanMedia**
> TanMedia getCurrentTanMedia(accessId)

Get current TAN media.

Returns the currently selected TAN media for the access.

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.TANSchemesApi();

let accessId = "accessId_example"; // String | The **accessId** for which to retrieve the current TAN media.


apiInstance.getCurrentTanMedia(accessId, (error, data, response) => {
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
 **accessId** | **String**| The **accessId** for which to retrieve the current TAN media. | 

### Return type

[**TanMedia**](TanMedia.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCurrentTanScheme"></a>
# **getCurrentTanScheme**
> TanScheme getCurrentTanScheme(accessId)

Get current TAN scheme.

Returns the currently selected TAN scheme for the access.

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.TANSchemesApi();

let accessId = "accessId_example"; // String | The **accessId** for which to retrieve the current TAN scheme.


apiInstance.getCurrentTanScheme(accessId, (error, data, response) => {
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
 **accessId** | **String**| The **accessId** for which to retrieve the current TAN scheme. | 

### Return type

[**TanScheme**](TanScheme.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTanSchemes"></a>
# **getTanSchemes**
> [TanScheme] getTanSchemes(accessId, opts)

List TAN schemes for access

Retrieves all available TAN schemes for access.

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.TANSchemesApi();

let accessId = "accessId_example"; // String | The **id** for the access for which to retrieve the TAN list

let opts = { 
  'maxAge': 789 // Number | Optional - defines maximum age (in seconds) of cached account data provided by the bank.      A \"maxAge\" of 3600 will not trigger an update of TAN schemes, when last refresh has been      done 2000 seconds ago.
};

apiInstance.getTanSchemes(accessId, opts, (error, data, response) => {
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
 **accessId** | **String**| The **id** for the access for which to retrieve the TAN list | 
 **maxAge** | **Number**| Optional - defines maximum age (in seconds) of cached account data provided by the bank.      A \&quot;maxAge\&quot; of 3600 will not trigger an update of TAN schemes, when last refresh has been      done 2000 seconds ago. | [optional] 

### Return type

[**[TanScheme]**](TanScheme.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="putCurrentTanMedia"></a>
# **putCurrentTanMedia**
> Access putCurrentTanMedia(accessId, tanMediaId)

Update current TAN media.

Update the access with a new currentTanMedia.

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.TANSchemesApi();

let accessId = "accessId_example"; // String | The **accessId** for which to set the current TAN media.

let tanMediaId = "tanMediaId_example"; // String | The **id** for the TAN media that should be set as the new currentTanMedia.


apiInstance.putCurrentTanMedia(accessId, tanMediaId, (error, data, response) => {
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
 **accessId** | **String**| The **accessId** for which to set the current TAN media. | 
 **tanMediaId** | **String**| The **id** for the TAN media that should be set as the new currentTanMedia. | 

### Return type

[**Access**](Access.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putCurrentTanScheme"></a>
# **putCurrentTanScheme**
> Access putCurrentTanScheme(accessId, tanSchemeId)

Update current TAN scheme.

Update the access with a new currentTanScheme.

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.TANSchemesApi();

let accessId = "accessId_example"; // String | The **accessId** for which to set the current TAN scheme.

let tanSchemeId = "tanSchemeId_example"; // String | The **id** for the TAN scheme that should be set as the new currentTanScheme.


apiInstance.putCurrentTanScheme(accessId, tanSchemeId, (error, data, response) => {
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
 **accessId** | **String**| The **accessId** for which to set the current TAN scheme. | 
 **tanSchemeId** | **String**| The **id** for the TAN scheme that should be set as the new currentTanScheme. | 

### Return type

[**Access**](Access.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


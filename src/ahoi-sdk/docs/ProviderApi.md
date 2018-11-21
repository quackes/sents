# SwaggerJsClient.ProviderApi

All URIs are relative to *https://localhost/ahoi/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProvider**](ProviderApi.md#getProvider) | **GET** /providers/{providerId} | Get provider
[**getProviders**](ProviderApi.md#getProviders) | **GET** /providers | List bank providers


<a name="getProvider"></a>
# **getProvider**
> Provider getProvider(providerId)

Get provider

Retrieve a single provider identified by **providerId**.

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.ProviderApi();

let providerId = "providerId_example"; // String | The **providerId** to retrieve


apiInstance.getProvider(providerId, (error, data, response) => {
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
 **providerId** | **String**| The **providerId** to retrieve | 

### Return type

[**Provider**](Provider.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProviders"></a>
# **getProviders**
> [Provider] getProviders(opts)

List bank providers

Retrieve a list of bank providers. A provider-**id** is necessary to create an _access_. To retrieve the necessary access fields, you need to query the specific &#x60;provider/{providerId}&#x60;. For performance reasons they are kept separate. 

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.ProviderApi();

let opts = { 
  'bankCode': "bankCode_example", // String | Optional — if length = 8, the response will also contain data describing             the fields required for account setup
  'supported': true, // Boolean | Optional — response should only contain providers supported for account             setup via this API
  'query': "query_example" // String | Optional — search parameters for BankCode, BIC, Location, Name. Will be ignored             if the bankCode query parameter is set.
};

apiInstance.getProviders(opts, (error, data, response) => {
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
 **bankCode** | **String**| Optional — if length &#x3D; 8, the response will also contain data describing             the fields required for account setup | [optional] 
 **supported** | **Boolean**| Optional — response should only contain providers supported for account             setup via this API | [optional] 
 **query** | **String**| Optional — search parameters for BankCode, BIC, Location, Name. Will be ignored             if the bankCode query parameter is set. | [optional] 

### Return type

[**[Provider]**](Provider.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


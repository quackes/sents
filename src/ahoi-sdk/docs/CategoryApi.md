# SwaggerJsClient.CategoryApi

All URIs are relative to *https://localhost/ahoi/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCategories**](CategoryApi.md#getCategories) | **GET** /categories | Retrieve all categories for given origin.


<a name="getCategories"></a>
# **getCategories**
> [Category] getCategories(origin)

Retrieve all categories for given origin.

Supported origins are: FINLYTICS

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.CategoryApi();

let origin = "origin_example"; // String | identifier of a supported origin


apiInstance.getCategories(origin, (error, data, response) => {
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
 **origin** | **String**| identifier of a supported origin | 

### Return type

[**[Category]**](Category.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


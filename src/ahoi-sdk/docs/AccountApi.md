# SwaggerJsClient.AccountApi

All URIs are relative to *https://localhost/ahoi/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAccount**](AccountApi.md#deleteAccount) | **DELETE** /accesses/{accessId}/accounts/{accountId} | Delete account
[**getAccount**](AccountApi.md#getAccount) | **GET** /accesses/{accessId}/accounts/{accountId} | Get account
[**getAccounts**](AccountApi.md#getAccounts) | **GET** /accesses/{accessId}/accounts | List accounts
[**updateAccount**](AccountApi.md#updateAccount) | **PUT** /accesses/{accessId}/accounts/{accountId}/userdefinedname/{name} | Update account name


<a name="deleteAccount"></a>
# **deleteAccount**
> deleteAccount(accessId, accountId)

Delete account

Delete the account identified by **accountId**. 

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.AccountApi();

let accessId = "accessId_example"; // String | The **accessId** for the account to delete

let accountId = "accountId_example"; // String | The **id** for the account to delete


apiInstance.deleteAccount(accessId, accountId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessId** | **String**| The **accessId** for the account to delete | 
 **accountId** | **String**| The **id** for the account to delete | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAccount"></a>
# **getAccount**
> Account getAccount(accessId, accountId)

Get account

Returns the account identified by **accountId**.

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.AccountApi();

let accessId = "accessId_example"; // String | The **accessId** for the account to retrieve

let accountId = "accountId_example"; // String | The **id** for the account to retrieve


apiInstance.getAccount(accessId, accountId, (error, data, response) => {
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
 **accessId** | **String**| The **accessId** for the account to retrieve | 
 **accountId** | **String**| The **id** for the account to retrieve | 

### Return type

[**Account**](Account.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAccounts"></a>
# **getAccounts**
> [Account] getAccounts(accessId)

List accounts

Retrieve all accounts for the current user under the **accessId**.

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.AccountApi();

let accessId = "accessId_example"; // String | The **id** for the access for which to retrieve all accounts


apiInstance.getAccounts(accessId, (error, data, response) => {
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
 **accessId** | **String**| The **id** for the access for which to retrieve all accounts | 

### Return type

[**[Account]**](Account.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateAccount"></a>
# **updateAccount**
> Account updateAccount(accessId, accountId, name)

Update account name

Update the account name used in AHOI. Name must be URL encoded.

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.AccountApi();

let accessId = "accessId_example"; // String | The **accessId** for which the user-defined account name should be altered

let accountId = "accountId_example"; // String | The **id** for which the user-defined account name should be altered

let name = "name_example"; // String | The new URL-encoded name


apiInstance.updateAccount(accessId, accountId, name, (error, data, response) => {
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
 **accessId** | **String**| The **accessId** for which the user-defined account name should be altered | 
 **accountId** | **String**| The **id** for which the user-defined account name should be altered | 
 **name** | **String**| The new URL-encoded name | 

### Return type

[**Account**](Account.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


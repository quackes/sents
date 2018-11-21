# SwaggerJsClient.AccessApi

All URIs are relative to *https://localhost/ahoi/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAccess**](AccessApi.md#deleteAccess) | **DELETE** /accesses/{accessId} | Delete access
[**getAccess**](AccessApi.md#getAccess) | **GET** /accesses/{accessId} | Get access
[**getAccesses**](AccessApi.md#getAccesses) | **GET** /accesses | List accesses
[**postAccess**](AccessApi.md#postAccess) | **POST** /accesses | Create a new access
[**putAccess**](AccessApi.md#putAccess) | **PUT** /accesses/{accessId} | Update access


<a name="deleteAccess"></a>
# **deleteAccess**
> deleteAccess(accessId)

Delete access

Delete access with **accessId** and all related accounts.

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.AccessApi();

let accessId = "accessId_example"; // String | The **id** for the access to delete


apiInstance.deleteAccess(accessId, (error, data, response) => {
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
 **accessId** | **String**| The **id** for the access to delete | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAccess"></a>
# **getAccess**
> Access getAccess(accessId)

Get access

Retrieve the access with **accessId**. The retrieved object does not contain sensitive information such as the PIN.

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.AccessApi();

let accessId = "accessId_example"; // String | The **id** for the access to retrieve.


apiInstance.getAccess(accessId, (error, data, response) => {
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
 **accessId** | **String**| The **id** for the access to retrieve. | 

### Return type

[**Access**](Access.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAccesses"></a>
# **getAccesses**
> [Access] getAccesses()

List accesses

Returns all registered accesses for the authenticated user. Confidential information like the PIN will not be returned.

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.AccessApi();

apiInstance.getAccesses((error, data, response) => {
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

[**[Access]**](Access.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postAccess"></a>
# **postAccess**
> Access postAccess(accessDto)

Create a new access

Create a new access and setup all associated accounts and transactions. This will also trigger the creation of monthly transaction summaries, the analysis of all accounts for recurring transactions, and the calculation of the balance forecast.   If the credentials were invalid, the validation state is set accordingly.    It is possible to have multiple accesses for one user.

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.AccessApi();

let accessDto = new SwaggerJsClient.Access(); // Access | A valid BankAccess object containing the required             **accessFields** as indicated by the provider object and the             **providerId**.


apiInstance.postAccess(accessDto, (error, data, response) => {
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
 **accessDto** | [**Access**](Access.md)| A valid BankAccess object containing the required             **accessFields** as indicated by the provider object and the             **providerId**. | 

### Return type

[**Access**](Access.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putAccess"></a>
# **putAccess**
> Access putAccess(accessId, accessDto)

Update access

Update the access credentials in **accessFields**. If the access does not exist, the **accessId** does not match the **id** in **accessDto** or the **providerId** is not the same, the status code 404 is returned. If another access with the same login  data already exists, the status code 409 is returned.  The updated access is validated by setting up an account. The status code 200 does not imply that the credentials are correct. To check this the client should obtain access.

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.AccessApi();

let accessId = "accessId_example"; // String | The **id** for the access to update.

let accessDto = new SwaggerJsClient.Access(); // Access | The Access object that contains the changed credentials in             **accessFields**. Other fields cannot be edited.


apiInstance.putAccess(accessId, accessDto, (error, data, response) => {
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
 **accessId** | **String**| The **id** for the access to update. | 
 **accessDto** | [**Access**](Access.md)| The Access object that contains the changed credentials in             **accessFields**. Other fields cannot be edited. | 

### Return type

[**Access**](Access.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


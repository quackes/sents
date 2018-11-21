# SwaggerJsClient.TransferApi

All URIs are relative to *https://localhost/ahoi/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postTransfer**](TransferApi.md#postTransfer) | **POST** /accesses/{accessId}/accounts/{accountId}/transfers | Create a new transfer


<a name="postTransfer"></a>
# **postTransfer**
> TransferTask postTransfer(accessId, accountId, transfer)

Create a new transfer

The transfer represents a money  transfer from the account identified by its id to another bank account.  **Please note:** Exception from the norm. This POST request will not return  the two header fields X-Id and Location. Also, the returned JSON document  does not represent the transfer entity, but a temporary placeholder.  The transfer is processed asynchronous and needs a message URL zu be configured  to report back the tan challenge and when it is finished.

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.TransferApi();

let accessId = "accessId_example"; // String | 

let accountId = "accountId_example"; // String | The **id** for the account.

let transfer = new SwaggerJsClient.Transfer(); // Transfer | transfer to create


apiInstance.postTransfer(accessId, accountId, transfer, (error, data, response) => {
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
 **accountId** | **String**| The **id** for the account. | 
 **transfer** | [**Transfer**](Transfer.md)| transfer to create | 

### Return type

[**TransferTask**](TransferTask.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


# SwaggerJsClient.TaskApi

All URIs are relative to *https://localhost/ahoi/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getChallenge**](TaskApi.md#getChallenge) | **GET** /tasks/{taskId}/challenges | Fetch challenge
[**getTask**](TaskApi.md#getTask) | **GET** /tasks/{taskId} | Fetch task
[**postChallengeResponse**](TaskApi.md#postChallengeResponse) | **POST** /tasks/{taskId}/authorizations | Authorize task


<a name="getChallenge"></a>
# **getChallenge**
> Challenge getChallenge(taskId)

Fetch challenge

Fetch challenge for asynchronous running task item from AHOI.

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.TaskApi();

let taskId = "taskId_example"; // String | The **id** for the Task.


apiInstance.getChallenge(taskId, (error, data, response) => {
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
 **taskId** | **String**| The **id** for the Task. | 

### Return type

[**Challenge**](Challenge.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTask"></a>
# **getTask**
> Task getTask(taskId)

Fetch task

Fetch asynchronous running task item and its state from AHOI.

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.TaskApi();

let taskId = "taskId_example"; // String | The **id** for the access to retrieve.


apiInstance.getTask(taskId, (error, data, response) => {
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
 **taskId** | **String**| The **id** for the access to retrieve. | 

### Return type

[**Task**](Task.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postChallengeResponse"></a>
# **postChallengeResponse**
> Task postChallengeResponse(taskId, challengeResponse)

Authorize task

Provide an authorization information (e.g. TAN) to an asynchronous running task.

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.TaskApi();

let taskId = "taskId_example"; // String | The **id** for the Task.

let challengeResponse = new SwaggerJsClient.ChallengeResponse(); // ChallengeResponse | the response to process


apiInstance.postChallengeResponse(taskId, challengeResponse, (error, data, response) => {
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
 **taskId** | **String**| The **id** for the Task. | 
 **challengeResponse** | [**ChallengeResponse**](ChallengeResponse.md)| the response to process | 

### Return type

[**Task**](Task.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


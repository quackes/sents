# SwaggerJsClient.TransactionSummaryApi

All URIs are relative to *https://localhost/ahoi/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listSummary**](TransactionSummaryApi.md#listSummary) | **GET** /accesses/{accessId}/accounts/{accountId}/transactionsummaries | List account summaries


<a name="listSummary"></a>
# **listSummary**
> [MonthlySummary] listSummary(accessId, accountId, opts)

List account summaries

Retrieve account summaries and provide a sum for incoming and outgoing transactions.

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.TransactionSummaryApi();

let accessId = "accessId_example"; // String | The **accessId** for which to list the summaries

let accountId = "accountId_example"; // String | The **accountId** for which to list the summaries

let opts = { 
  'limit': 56, // Number | Optional — limit the number of returned summary entries
  'offset': 56, // Number | Optional — skip the first **offset** summary entries in the result
  'from': "from_example", // String | Optional — only return summary entries later than **from**; an         ISO8601 Date (2014-11-17)
  'to': "to_example" // String | Optional — only return summary entries prior or equal to         **to**; an ISO8601 Date
};

apiInstance.listSummary(accessId, accountId, opts, (error, data, response) => {
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
 **accessId** | **String**| The **accessId** for which to list the summaries | 
 **accountId** | **String**| The **accountId** for which to list the summaries | 
 **limit** | **Number**| Optional — limit the number of returned summary entries | [optional] 
 **offset** | **Number**| Optional — skip the first **offset** summary entries in the result | [optional] 
 **from** | **String**| Optional — only return summary entries later than **from**; an         ISO8601 Date (2014-11-17) | [optional] 
 **to** | **String**| Optional — only return summary entries prior or equal to         **to**; an ISO8601 Date | [optional] 

### Return type

[**[MonthlySummary]**](MonthlySummary.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


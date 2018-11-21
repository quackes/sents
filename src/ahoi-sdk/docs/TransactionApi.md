# SwaggerJsClient.TransactionApi

All URIs are relative to *https://localhost/ahoi/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTransaction**](TransactionApi.md#getTransaction) | **GET** /accesses/{accessId}/accounts/{accountId}/transactions/{transactionId} | Get transaction
[**listTransactions**](TransactionApi.md#listTransactions) | **GET** /accesses/{accessId}/accounts/{accountId}/transactions | List transactions for account
[**listTransactionsForPattern**](TransactionApi.md#listTransactionsForPattern) | **GET** /accesses/{accessId}/accounts/{accountId}/transactionpatterns/{patternId}/transactions | List transactions for pattern


<a name="getTransaction"></a>
# **getTransaction**
> Transaction getTransaction(accessId, accountId, transactionId)

Get transaction

Returns the transaction identified by **transactionId** in relationship with **accountId**.

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.TransactionApi();

let accessId = "accessId_example"; // String | The **accessId** for the transaction to retrieve

let accountId = "accountId_example"; // String | The **accountId** for the transaction to retrieve

let transactionId = "transactionId_example"; // String | The **transactionId** for the pattern to retrieve


apiInstance.getTransaction(accessId, accountId, transactionId, (error, data, response) => {
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
 **accessId** | **String**| The **accessId** for the transaction to retrieve | 
 **accountId** | **String**| The **accountId** for the transaction to retrieve | 
 **transactionId** | **String**| The **transactionId** for the pattern to retrieve | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listTransactions"></a>
# **listTransactions**
> [Transaction] listTransactions(accessId, accountId, opts)

List transactions for account

Retrieve all transactions for **accountId**.

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.TransactionApi();

let accessId = "accessId_example"; // String | The **accessId** for which to retrieve transactions.

let accountId = "accountId_example"; // String | The **accountId** for which to retrieve transactions.

let opts = { 
  'maxAge': 789, // Number | Optional - defines maximum age (in seconds) of cached account data provided by the bank.          A \"maxAge\" of 3600 will not trigger an update of transactions, when last refresh has          been done 2000 seconds ago.
  'limit': 56, // Number | Optional — limit the number of returned transactions
  'offset': 56, // Number | Optional — skip the first **offset** transactions in result
  'from': "from_example", // String | Optional — only return transactions with booking date later than **from**; an ISO8601 Month(2014-11), Date (2014-11-17) or DateTime         (2014-11-17T12:00:00Z)
  'to': "to_example" // String | Optional — only return transactions with booking date prior or equal to **to**; an ISO8601 Date, Month or DateTime
};

apiInstance.listTransactions(accessId, accountId, opts, (error, data, response) => {
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
 **accessId** | **String**| The **accessId** for which to retrieve transactions. | 
 **accountId** | **String**| The **accountId** for which to retrieve transactions. | 
 **maxAge** | **Number**| Optional - defines maximum age (in seconds) of cached account data provided by the bank.          A \&quot;maxAge\&quot; of 3600 will not trigger an update of transactions, when last refresh has          been done 2000 seconds ago. | [optional] 
 **limit** | **Number**| Optional — limit the number of returned transactions | [optional] 
 **offset** | **Number**| Optional — skip the first **offset** transactions in result | [optional] 
 **from** | **String**| Optional — only return transactions with booking date later than **from**; an ISO8601 Month(2014-11), Date (2014-11-17) or DateTime         (2014-11-17T12:00:00Z) | [optional] 
 **to** | **String**| Optional — only return transactions with booking date prior or equal to **to**; an ISO8601 Date, Month or DateTime | [optional] 

### Return type

[**[Transaction]**](Transaction.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listTransactionsForPattern"></a>
# **listTransactionsForPattern**
> [Transaction] listTransactionsForPattern(accessId, accountId, patternId, opts)

List transactions for pattern

Retrieve all transactions for **patternId**.

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.TransactionApi();

let accessId = "accessId_example"; // String | The **accessId** for which to retrieve transactions

let accountId = "accountId_example"; // String | The **accountId** for which to retrieve transactions

let patternId = "patternId_example"; // String | The **patternId** for which to retrieve transactions

let opts = { 
  'maxAge': 789, // Number | Optional - defines maximum age (in seconds) of cached account data provided by the bank.       A \"maxAge\" of 3600 will not trigger an update of transactions, when last refresh has       been done 2000 seconds ago.
  'limit': 56, // Number | Optional — limit the number of returned transactions
  'offset': 56, // Number | Optional — skip the first **offset** transactions in result
  'from': "from_example", // String | Optional — only return transactions with a booking date later than **from**; an ISO8601 Month(2014-11), Date (2014-11-17) or DateTime         (2014-11-17T12:00:00Z)
  'to': "to_example" // String | Optional — only return transactions with a booking date prior or equal to **to**; an ISO8601 Date, Month or DateTime
};

apiInstance.listTransactionsForPattern(accessId, accountId, patternId, opts, (error, data, response) => {
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
 **accessId** | **String**| The **accessId** for which to retrieve transactions | 
 **accountId** | **String**| The **accountId** for which to retrieve transactions | 
 **patternId** | **String**| The **patternId** for which to retrieve transactions | 
 **maxAge** | **Number**| Optional - defines maximum age (in seconds) of cached account data provided by the bank.       A \&quot;maxAge\&quot; of 3600 will not trigger an update of transactions, when last refresh has       been done 2000 seconds ago. | [optional] 
 **limit** | **Number**| Optional — limit the number of returned transactions | [optional] 
 **offset** | **Number**| Optional — skip the first **offset** transactions in result | [optional] 
 **from** | **String**| Optional — only return transactions with a booking date later than **from**; an ISO8601 Month(2014-11), Date (2014-11-17) or DateTime         (2014-11-17T12:00:00Z) | [optional] 
 **to** | **String**| Optional — only return transactions with a booking date prior or equal to **to**; an ISO8601 Date, Month or DateTime | [optional] 

### Return type

[**[Transaction]**](Transaction.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


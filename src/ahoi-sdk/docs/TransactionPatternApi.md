# SwaggerJsClient.TransactionPatternApi

All URIs are relative to *https://localhost/ahoi/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateTransactionPattern**](TransactionPatternApi.md#activateTransactionPattern) | **PUT** /accesses/{accessId}/accounts/{accountId}/transactionpatterns/{patternId}/active/{activated} | Enable a transaction pattern
[**deleteTransactionPattern**](TransactionPatternApi.md#deleteTransactionPattern) | **DELETE** /accesses/{accessId}/accounts/{accountId}/transactionpatterns/{patternId} | Delete transaction pattern
[**getTransactionPattern**](TransactionPatternApi.md#getTransactionPattern) | **GET** /accesses/{accessId}/accounts/{accountId}/transactionpatterns/{patternId} | Get transaction pattern
[**listTransactionPatterns**](TransactionPatternApi.md#listTransactionPatterns) | **GET** /accesses/{accessId}/accounts/{accountId}/transactionpatterns | List transaction patterns for account
[**postTransactionPattern**](TransactionPatternApi.md#postTransactionPattern) | **POST** /accesses/{accessId}/accounts/{accountId}/transactionpatterns | Create a new pattern


<a name="activateTransactionPattern"></a>
# **activateTransactionPattern**
> TransactionPattern activateTransactionPattern(accessId, accountId, patternId, activated)

Enable a transaction pattern

Disabling the transaction pattern results in ignoring the pattern in the forecast. The transaction still exists and relations with transactions are not modified.

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.TransactionPatternApi();

let accessId = "accessId_example"; // String | The **accessId** for which to activate the pattern

let accountId = "accountId_example"; // String | The **accountId** for which to activate the pattern

let patternId = "patternId_example"; // String | The **patternId** to (de)activate

let activated = true; // Boolean | If `true`, the pattern will be used for forecast calculations;         `false` will be ignored


apiInstance.activateTransactionPattern(accessId, accountId, patternId, activated, (error, data, response) => {
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
 **accessId** | **String**| The **accessId** for which to activate the pattern | 
 **accountId** | **String**| The **accountId** for which to activate the pattern | 
 **patternId** | **String**| The **patternId** to (de)activate | 
 **activated** | **Boolean**| If &#x60;true&#x60;, the pattern will be used for forecast calculations;         &#x60;false&#x60; will be ignored | 

### Return type

[**TransactionPattern**](TransactionPattern.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteTransactionPattern"></a>
# **deleteTransactionPattern**
> deleteTransactionPattern(accessId, accountId, patternId)

Delete transaction pattern

Delete the transaction pattern identified by the **patternId**. All associated transactions will be updated to {{patternId &#x3D; null}}.

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.TransactionPatternApi();

let accessId = "accessId_example"; // String | The **accessId** for the transaction pattern to delete

let accountId = "accountId_example"; // String | The **accountId** for the transaction pattern to delete

let patternId = "patternId_example"; // String | The **patternId** to delete


apiInstance.deleteTransactionPattern(accessId, accountId, patternId, (error, data, response) => {
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
 **accessId** | **String**| The **accessId** for the transaction pattern to delete | 
 **accountId** | **String**| The **accountId** for the transaction pattern to delete | 
 **patternId** | **String**| The **patternId** to delete | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getTransactionPattern"></a>
# **getTransactionPattern**
> TransactionPattern getTransactionPattern(accessId, accountId, patternId)

Get transaction pattern

Returns the transaction pattern identified by **patternId** in relationship with  **accountId**.

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.TransactionPatternApi();

let accessId = "accessId_example"; // String | The **accessId** for the pattern to retrieve

let accountId = "accountId_example"; // String | The **accoundId** for the pattern to retrieve

let patternId = "patternId_example"; // String | The **patternId** for the pattern to retrieve


apiInstance.getTransactionPattern(accessId, accountId, patternId, (error, data, response) => {
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
 **accessId** | **String**| The **accessId** for the pattern to retrieve | 
 **accountId** | **String**| The **accoundId** for the pattern to retrieve | 
 **patternId** | **String**| The **patternId** for the pattern to retrieve | 

### Return type

[**TransactionPattern**](TransactionPattern.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listTransactionPatterns"></a>
# **listTransactionPatterns**
> [TransactionPattern] listTransactionPatterns(accessId, accountId)

List transaction patterns for account

Returns all transaction pattern for **accountId**. Transaction patterns are recurring transactions automatically identified by the server or manually created via [create transaction pattern](#!/Transaction_pattern/postTransactionPattern).

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.TransactionPatternApi();

let accessId = "accessId_example"; // String | The **accessId** for which to retrieve transaction patterns

let accountId = "accountId_example"; // String | The **accountId** for which to retrieve transaction patterns


apiInstance.listTransactionPatterns(accessId, accountId, (error, data, response) => {
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
 **accessId** | **String**| The **accessId** for which to retrieve transaction patterns | 
 **accountId** | **String**| The **accountId** for which to retrieve transaction patterns | 

### Return type

[**[TransactionPattern]**](TransactionPattern.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postTransactionPattern"></a>
# **postTransactionPattern**
> TransactionPattern postTransactionPattern(accessId, accountId, transactionPatternDto)

Create a new pattern

Create a new pattern for an **accountId**. The **cycle** can be one of &#x60;MONTHLY&#x60;, &#x60;QUARTERLY&#x60;, &#x60;SEMI_ANNUALLY&#x60; or &#x60;ANNUALLY&#x60;. The **day** can be between &#x60;1&#x60; and &#x60;366&#x60;, depending on **cycle**:  | cycle | day range | example | | --- | --- | --- | | &#x60;MONTHLY&#x60; | &#x60;1&#x60;-&#x60;31&#x60;  | every 29th of the month &#x3D;&gt; &#x60;29&#x60; | | &#x60;QUARTERLY&#x60; | &#x60;1&#x60;-&#x60;92&#x60;  | 23rd of February (23rd of May, etc.) &#x3D;&gt; &#x60;54&#x60; (31 [complete first month] + 23 [days in second month]) | | &#x60;SEMI_ANNUALLY&#x60; | &#x60;1&#x60;-&#x60;184&#x60; | 1st of May and 1st of November &#x3D;&gt; &#x60;121&#x60; (for first half of year: 31 + 28 + 31 + 30 + 1) | | &#x60;ANNUALLY&#x60; | &#x60;1&#x60;-&#x60;366&#x60; | 24th of December &#x3D;&gt; &#x60;358&#x60; |  If a similar pattern already exists, you will receive an HTTP status code 409.

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.TransactionPatternApi();

let accessId = "accessId_example"; // String | The **accessId** to which the new created pattern is associated with

let accountId = "accountId_example"; // String | The **accountId** to which the new created pattern is associated with

let transactionPatternDto = new SwaggerJsClient.TransactionPattern(); // TransactionPattern | The transaction pattern to create


apiInstance.postTransactionPattern(accessId, accountId, transactionPatternDto, (error, data, response) => {
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
 **accessId** | **String**| The **accessId** to which the new created pattern is associated with | 
 **accountId** | **String**| The **accountId** to which the new created pattern is associated with | 
 **transactionPatternDto** | [**TransactionPattern**](TransactionPattern.md)| The transaction pattern to create | 

### Return type

[**TransactionPattern**](TransactionPattern.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


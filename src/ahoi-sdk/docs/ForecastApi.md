# SwaggerJsClient.ForecastApi

All URIs are relative to *https://localhost/ahoi/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getForecast**](ForecastApi.md#getForecast) | **GET** /accesses/{accessId}/accounts/{accountId}/forecast | Get balance forecast
[**getForecastTransactions**](ForecastApi.md#getForecastTransactions) | **GET** /accesses/{accessId}/accounts/{accountId}/forecast/transactions | Retrieve balance forecast for the end of the current month.


<a name="getForecast"></a>
# **getForecast**
> Forecast getForecast(accessId, accountId)

Get balance forecast

The current month is determined by the latest refresh.

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.ForecastApi();

let accessId = "accessId_example"; // String | The **accessId** for which to retrieve forecasts

let accountId = "accountId_example"; // String | The **accountId** for which to retrieve forecasts


apiInstance.getForecast(accessId, accountId, (error, data, response) => {
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
 **accessId** | **String**| The **accessId** for which to retrieve forecasts | 
 **accountId** | **String**| The **accountId** for which to retrieve forecasts | 

### Return type

[**Forecast**](Forecast.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getForecastTransactions"></a>
# **getForecastTransactions**
> ForecastTransaction getForecastTransactions(accessId, accountId)

Retrieve balance forecast for the end of the current month.

The current  month is determined by latest refresh of transactions. The request  also retrieves the transactions expected to be applied until the  end of the current month.

### Example
```javascript
import SwaggerJsClient from 'swagger-js-client';
let defaultClient = SwaggerJsClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerJsClient.ForecastApi();

let accessId = "accessId_example"; // String | The **accessId** for the forecast.

let accountId = "accountId_example"; // String | The **id** for the account.


apiInstance.getForecastTransactions(accessId, accountId, (error, data, response) => {
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
 **accessId** | **String**| The **accessId** for the forecast. | 
 **accountId** | **String**| The **id** for the account. | 

### Return type

[**ForecastTransaction**](ForecastTransaction.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


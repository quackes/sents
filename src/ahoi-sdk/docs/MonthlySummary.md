# SwaggerJsClient.MonthlySummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | MonthlySummary id in UUID form | 
**month** | **String** | The month this entry belongs to (year-month in the ISO-8601: \&quot;yyyy-MM\&quot;) | 
**accountId** | **String** | Id of account this entry belongs to | 
**income** | [**Amount**](Amount.md) | Sum of all incoming transactions for this month | 
**outgoings** | [**Amount**](Amount.md) | Sum of all outgoing transactions for this month | 
**balance** | [**Amount**](Amount.md) | Balance at end of month | 



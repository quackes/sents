# SwaggerJsClient.GiroTransaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**Amount**](Amount.md) | Amount value | 
**bookingDate** | **Date** | Booking date (ISO 8601: \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ssX\&quot;) | 
**valueDate** | **Date** | Value Date (ISO 8601: \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ssX\&quot;) | 
**creditor** | **String** | Creditor&#39;s name | 
**creditorBankCode** | **String** | Creditor&#39;s bank code or BIC | [optional] 
**creditorAccountNumber** | **String** | Creditor&#39;s account number or IBAN | [optional] 
**debtor** | **String** | Debtor&#39;s name | 
**debtorBankCode** | **String** | Debtor&#39;s bank code or BIC | [optional] 
**debtorAccountNumber** | **String** | Debtor&#39;s account number or IBAN | [optional] 
**purpose** | **String** | Purpose (as given by the provider) | 
**cleanPurpose** | **String** | Cleaned purpose. Some SEPA information is filtered out (e.g., \&quot;KREF+-1434947533-2...\&quot;) | [optional] 
**prebooked** | **Boolean** | Flag to identify if the transaction is marked as pre-booked | 
**bookingKey** | **String** | Booking key for transaction | 



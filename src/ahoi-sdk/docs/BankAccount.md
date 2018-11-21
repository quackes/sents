# SwaggerJsClient.BankAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_number** | **String** | Account number (national) | 
**bankCodeNumber** | **String** | Bank code number (BLZ, national, 8 digits) | 
**bic** | **String** | Business Identifier Code (BIC; ISO 9362) | 
**iban** | **String** | International Bank Account Number (IBAN; ISO 13616-1) | 
**currency** | **String** | Account currency (ISO 4217) (e.g., \&quot;EUR\&quot;) | 
**balance** | [**Balance**](Balance.md) | Current balance. This value is set whenever the account is refreshed. | 



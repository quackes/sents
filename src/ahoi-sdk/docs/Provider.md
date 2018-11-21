# SwaggerJsClient.Provider

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | UUID of this provider. A constant to identify provider even when  e.g. their bank code changes (provided type is BankProvider) | 
**name** | **String** | Name of this provider e.g. \&quot;Hamburger Bank\&quot; | 
**location** | **String** | Location of this provider e.g. \&quot;Hamburg\&quot; | 
**accessDescription** | [**AccessDescription**](AccessDescription.md) | Description of the access for the account-setup e.g. UI-input-fields | [optional] 
**supported** | **Boolean** | Whether this bank is supported by AHOI-API, i.e. whether you can use a connection of this provider. | 
**type** | **String** | Discriminator for subtypes. At the moment only &#x60;BankProvider&#x60; is supported. | 



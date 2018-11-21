# SwaggerJsClient.Transaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Internal ID of this transaction (generated value) | 
**transactionPatternId** | **String** | Identifier of the transactionPattern to which this transaction belongs | [optional] 
**additionalInformation** | [**[AdditionalInformation]**](AdditionalInformation.md) |  | [optional] 
**type** | **String** | Discriminator for subtypes. At the moment only &#x60;GiroTransaction&#x60; is supported. | 



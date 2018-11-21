# SwaggerJsClient.Access

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Internal ID of this access (generated value) | [optional] 
**providerId** | **String** | Identifier of the provider to which this access belongs | 
**accessFields** | [**AccessFieldsMap**](AccessFieldsMap.md) | Authentication data for the given provider as map of InputFieldId to String (e.g., &#x60;{\&quot;USERNAME\&quot;, \&quot;yourName\&quot;}&#x60;)  The fields necessary for the access are determined by the   InputField descriptions of the related provider. | 
**validationState** | **String** | The state reflects the validity of the access credentials. The state can change after communicating with the provider.  It can be OK (access credentials are valid); &#x60;ACCESS_LOCKED&#x60; (access is locked: This can happen when, for example, someone tried to login to your account by  using an incorrect PIN too many times or if your account was used for illegal purposes — automatic refresh will be disabled); or &#x60;ACCESS_WRONG&#x60; (access wrong: Saved  credentials are incorrect and no communication with the provider is possible — automatic refresh will be disabled) | [optional] 
**type** | **String** | Discriminator for subtypes. At the moment only &#x60;BankAccess&#x60; is supported. | 


<a name="ValidationStateEnum"></a>
## Enum: ValidationStateEnum


* `OK` (value: `"OK"`)

* `ACCESS_LOCKED` (value: `"ACCESS_LOCKED"`)

* `ACCESS_WRONG` (value: `"ACCESS_WRONG"`)





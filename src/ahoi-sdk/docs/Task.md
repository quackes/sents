# SwaggerJsClient.Task

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **String** | Represents the state of this task. | [optional] 
**id** | **String** | UUID of this task to be used for identification on further task actions. | [optional] 
**type** | **String** | Discriminator for subtypes. At the moment only &#x60;TransferTask&#x60; is supported. | 


<a name="StateEnum"></a>
## Enum: StateEnum


* `UNKNOWN` (value: `"UNKNOWN"`)

* `INITIAL` (value: `"INITIAL"`)

* `DONE` (value: `"DONE"`)

* `FAILED` (value: `"FAILED"`)

* `AUTHORIZATION_PENDING` (value: `"AUTHORIZATION_PENDING"`)

* `AUTHORIZATION_WRONG` (value: `"AUTHORIZATION_WRONG"`)





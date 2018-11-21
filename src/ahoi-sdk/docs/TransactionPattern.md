# SwaggerJsClient.TransactionPattern

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Internal ID of this transactionPattern (generated value) | [optional] 
**state** | **String** | State of this pattern  can be &#x60;ACTIVE&#x60; (default) or &#x60;INACTIVE&#x60; (user has disabled it) | 
**cycle** | **String** | Frequency of occurrence for this pattern | 
**origin** | **String** | Origin of creation can be &#x60;FINDER&#x60; (automatically found) or &#x60;MANUAL&#x60; (created by user). Cannot be set with creation or update. | [optional] 
**day** | **Number** | Day in the cycle this pattern occurs | 
**relatedAccountOwner** | **String** | Name of owner of related account (debtor or creditor) | 
**amount** | [**Amount**](Amount.md) | Amount value | 
**accountNumber** | **String** | Account number or IBAN of related account (debtor or creditor) | 
**bankCode** | **String** | Bank code number or BIC of related account (debtor or creditor) | 
**kind** | **String** | Kind of transaction (e.g., \&quot;Lastschrift\&quot; or \&quot;Dauerauftrag\&quot;) | [optional] 


<a name="StateEnum"></a>
## Enum: StateEnum


* `INACTIVE` (value: `"INACTIVE"`)

* `ACTIVE` (value: `"ACTIVE"`)




<a name="CycleEnum"></a>
## Enum: CycleEnum


* `MONTHLY` (value: `"MONTHLY"`)

* `QUARTERLY` (value: `"QUARTERLY"`)

* `SEMI_ANNUALLY` (value: `"SEMI_ANNUALLY"`)

* `ANNUALLY` (value: `"ANNUALLY"`)




<a name="OriginEnum"></a>
## Enum: OriginEnum


* `FINDER` (value: `"FINDER"`)

* `MANUAL` (value: `"MANUAL"`)





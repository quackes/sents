# SwaggerJsClient.InputFieldDescription

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Internal id for this field description | 
**label** | **String** | Label for this field description (e.g. &#39;PIN&#39;, &#39;Login name&#39;, &#39;Customer No.&#39;) | 
**masked** | **Boolean** | Flag that indicates whether the given field value must be masked when entered on client side, respectively encrypted when persisted  on server side | 
**format** | **String** | Format of field value  Can be DEFINITELYNUMERIC (Format is definitely numeric), DEFINITELYALPHANUMERIC (Format is definitely alphanumeric),  PROBABLYALPHANUMERIC (Format is probably alphanumeric; numeric is unlikely but possible), PROBABLYNUMERIC (Format is probably  numeric; alphanumeric is unlikely but possible) or UNSPECIFIED (Default. No hint available) | 
**lengthMin** | **Number** | Minimum length of field value (0 &#x3D; no limit) | [optional] 
**lengthMax** | **Number** | Maximum length of field value (0 &#x3D; no limit) | [optional] 


<a name="IdEnum"></a>
## Enum: IdEnum


* `USERNAME` (value: `"USERNAME"`)

* `CUSTOMERNUMBER` (value: `"CUSTOMERNUMBER"`)

* `PIN` (value: `"PIN"`)

* `TAN` (value: `"TAN"`)




<a name="FormatEnum"></a>
## Enum: FormatEnum


* `UNSPECIFIED` (value: `"UNSPECIFIED"`)

* `PROBABLYNUMERIC` (value: `"PROBABLYNUMERIC"`)

* `DEFINITELYNUMERIC` (value: `"DEFINITELYNUMERIC"`)

* `PROBABLYALPHANUMERIC` (value: `"PROBABLYALPHANUMERIC"`)

* `DEFINITELYALPHANUMERIC` (value: `"DEFINITELYALPHANUMERIC"`)





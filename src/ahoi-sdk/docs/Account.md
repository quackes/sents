# SwaggerJsClient.Account

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Internal ID of this account (generated value) | 
**name** | **String** | Account name returned by bank provider (e.g., \&quot;Giro Account\&quot;) | 
**userDefinedName** | **String** | Account userDefinedName. This value can be set to define a custom name used in AHOI (e.g., \&quot;My Giro Account\&quot;).  Can be changed by using the account resource. | [optional] 
**owner** | **String** | Account owner returned by bank provider (e.g., \&quot;Max Mustermann\&quot;) | 
**providerId** | **String** | Identifier of the provider to which this account belongs | 
**kind** | **String** | An account kind is a classification of its structure and its possibilities.   This is typically defined by the bank provider. | 
**automaticRefreshInterval** | **Number** | Interval that indicates the freguency of which the account is updated.   This interval is read-only and is determined by the server depending on the last use of the API. The range is between every hour, daily and monthly. | 
**type** | **String** | Discriminator for subtypes. At the moment only &#x60;BankAccount&#x60; is supported. | 


<a name="KindEnum"></a>
## Enum: KindEnum


* `GIRO` (value: `"GIRO"`)

* `SPAR` (value: `"SPAR"`)

* `FESTGELD` (value: `"FESTGELD"`)

* `DEPOT` (value: `"DEPOT"`)

* `DARLEHEN` (value: `"DARLEHEN"`)

* `KREDITKARTE` (value: `"KREDITKARTE"`)

* `BAUSPAR` (value: `"BAUSPAR"`)

* `VL_SPAR` (value: `"VL_SPAR"`)

* `VL_BAUSPAR` (value: `"VL_BAUSPAR"`)

* `VL_WERTPAPIERSPARVERTRAG` (value: `"VL_WERTPAPIERSPARVERTRAG"`)

* `XXX` (value: `"XXX"`)





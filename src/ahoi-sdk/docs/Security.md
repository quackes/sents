# SwaggerJsClient.Security

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Internal ID of this security (generated value) | 
**wkn** | **String** | Wertpapierkennnummer  (german) securities identification number | [optional] 
**isin** | **String** | International Securities Identification Number | [optional] 
**name** | **String** | Name | [optional] 
**price** | [**Amount**](Amount.md) | Price | [optional] 
**priceSource** | **String** | Source of price   **LMAR - Local Market**   Source of price quotation is the market.     **THEO -Theoretical**   Source of price quotation is a theoretical value based on the market yield.     **VEND- Vendor**   Source of price quotation is an external vendor. | [optional] 
**quotationDate** | **String** |  | [optional] 
**location** | **String** | Market name/location if **priceSource** is *LMAR* | [optional] 
**priceQualifier** | **String** | Price qualifier    **MRKT** - Market Price   Last reported/known price of a financial instrument in a market.    **INDC** - Indicative Price   Estimated price, for example, for valuation purposes. | [optional] 
**quantity** | **String** | Balance | [optional] 
**amount** | [**Amount**](Amount.md) | Holding Value | [optional] 
**amountDivCurr** | [**Amount**](Amount.md) | Holding Value in divergent currency | [optional] 
**acquisitionDate** | **String** | Acquisition date | [optional] 
**acquisitionPrice** | [**Amount**](Amount.md) | Acquisition price | [optional] 
**dueDate** | **String** | Due date | [optional] 


<a name="PriceSourceEnum"></a>
## Enum: PriceSourceEnum


* `LMAR` (value: `"LMAR"`)

* `THEO` (value: `"THEO"`)

* `VEND` (value: `"VEND"`)




<a name="PriceQualifierEnum"></a>
## Enum: PriceQualifierEnum


* `MRKT` (value: `"MRKT"`)

* `INDC` (value: `"INDC"`)





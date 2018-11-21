# SwaggerJsClient.Contract

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contractorName** | **String** | Name of the contractor | [optional] 
**categoryName** | **String** | Name of assigned category | [optional] 
**averageAmount** | [**Amount**](Amount.md) | Detected amount of the transaction | [optional] 
**paymentInterval** | **String** | Interval in which a transaction is repeated | [optional] 
**type** | **String** | Type of the contract | [optional] 
**firstKnownBookingDate** | **String** | First booking date detected | [optional] 
**lastKnownBookingDate** | **String** | Last recent booking date detected | [optional] 
**estimatedNextBookingDate** | **String** | Estimated next booking date in the future | [optional] 
**estimatedNextAmount** | [**Amount**](Amount.md) | Estimated amount of the next booking | [optional] 
**contractDetails** | [**ContractDetailsMap**](ContractDetailsMap.md) | Some more details of a contract | [optional] 


<a name="PaymentIntervalEnum"></a>
## Enum: PaymentIntervalEnum


* `WEEKLY` (value: `"WEEKLY"`)

* `BIWEEKLY` (value: `"BIWEEKLY"`)

* `MONTHLY` (value: `"MONTHLY"`)

* `QUARTERLY` (value: `"QUARTERLY"`)

* `SEMIANNUAL` (value: `"SEMIANNUAL"`)

* `ANNUAL` (value: `"ANNUAL"`)

* `BIENNIAL` (value: `"BIENNIAL"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `SUBSCRIPTION` (value: `"SUBSCRIPTION"`)

* `RENT` (value: `"RENT"`)

* `RENT_REVENUES` (value: `"RENT_REVENUES"`)

* `SALARY` (value: `"SALARY"`)

* `SALARY_SIDE_JOB` (value: `"SALARY_SIDE_JOB"`)

* `PRIVATE_PENSION` (value: `"PRIVATE_PENSION"`)

* `PENSION` (value: `"PENSION"`)

* `RIESTER_RETIREMENT_PLAN_PAYMENTS` (value: `"RIESTER_RETIREMENT_PLAN_PAYMENTS"`)

* `RIESTER_RETIREMENT_PLAN_PAYOUTS` (value: `"RIESTER_RETIREMENT_PLAN_PAYOUTS"`)





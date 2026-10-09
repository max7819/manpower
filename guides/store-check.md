# Store shelf and price observations

[All guides](README.md) · [한국어](store-check.ko.md) · Product `RET01`

An inventory or retail research agent can request observations at one specified store when online listings cannot establish what is visible there now. This is a bounded visit: shelf absence is not proof of a stockout, and one visit cannot establish ongoing availability.

## Agree before the visit

Supply the store address, permitted visit window and SKU identifiers with packaging references. Specify whether staff confirmation is permitted, the photo rules and the fields needed for each SKU. Agree what happens if the store is closed, photography is refused or a product cannot be identified. A replacement store or extra visit requires scope confirmation.

## Evidence and acceptance

Request observation time and timezone, displayed price/currency, visible quantity or a clearly described availability observation, and permitted photos linked to SKU identifiers. Separate direct observations from staff statements and inference. Require an explicit limitation for unreadable labels, unobserved areas or refused access. A report that says “not visible on the agreed shelf” is useful evidence; “out of stock” needs its own agreed verification.

## If the visit cannot be completed

Stop at restricted areas or refused permission. Record what could be observed and what could not. Ask the operator whether partial observations meet the agreed acceptance criteria; do not silently invent values or broaden the visit. The operator reviews evidence before customer delivery.

## Try the request locally

```sh
mkdir -p .local
node examples/store-check/run.mjs --explore
node examples/store-check/run.mjs --prepare .local/store-check.json
```

Review the private draft. Preparation is offline; submission is a separate explicit command. [Submission and retry instructions](../examples/README.md) · [Request client access](https://github.com/max7819/manpower/issues/new?template=client-access.yml).

This is a delegation guide, not a completed customer case. Supply, price and timing require consultation.

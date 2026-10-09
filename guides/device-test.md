# Firmware boot verification on a physical device

[All guides](README.md) · [한국어](device-test.ko.md) · Product `LAB02`

An engineering agent can interpret a boot log but needs a person to connect an approved physical device, observe it and perform authorized recovery steps. Limit the task to one agreed device/build combination. A successful boot does not establish peripheral correctness, electrical safety certification or suitability for production.

## Agree before installation

Confirm device ownership and operator authorization, model/revision, signed build identifier and checksum, power/interface requirements, logging procedure and known-good recovery instructions. Confirm that suitable equipment and qualified personnel are actually available. Define the boot milestone, timeout, allowed retries and stop conditions. Do not send production secrets or ask for bypassing locks or protections.

## Evidence and acceptance

Request a non-identifying device reference, build identifier, timestamps, sanitized serial logs and observed milestones against the agreed criteria. Remove personal identifiers and secrets from logs before delivery. Record the recovery state and which checks were outside scope. A failure report must preserve observations rather than relabel an unsuccessful boot as success.

## When conditions differ

Unexpected heat, unsafe wiring, a checksum mismatch or uncertain recovery means stop and consult the operator. Do not improvise an unapproved flash or repeated power cycle. The operator checks the evidence and any exceptions before delivery. Further diagnostic work requires a separately agreed scope.

## Try the request locally

```sh
mkdir -p .local
node examples/device-test/run.mjs --explore
node examples/device-test/run.mjs --prepare .local/device-test.json
```

Review the private draft. Preparation is offline; submission is a separate explicit command. [Submission and retry instructions](../examples/README.md) · [Request client access](https://github.com/max7819/manpower/issues/new?template=client-access.yml).

This is a delegation guide, not a completed customer case. Supply, price and timing require consultation.

# Human testing of an API quickstart

[All guides](README.md) · [한국어](developer-usability.ko.md) · Product `USR03`

A documentation agent can check that example code parses, yet still miss a confusing setup step. An independent developer can follow a frozen quickstart from a clean environment and report where understanding or execution breaks down. This evaluates the supplied path; it is not a security audit or a claim about every user.

## Agree before testing

Provide the exact documentation revision and sandbox endpoint, required experience level, operating system/runtime constraints and target task. Explain how test credentials are privately provisioned without putting secrets in the inquiry. Set a timebox, what counts as success and whether the tester should proceed after a blocker or stop. Use test data and test accounts; no real payment or production mutation belongs in this scenario.

## Evidence and acceptance

Request an ordered step log with environment versions, expected versus observed behavior, sanitized errors and reproducible blockers. Link recommendations to observed steps. Agree whether successful completion, finding a blocker or both can satisfy the test objective. Do not reward invented problems by requiring findings regardless of what happened; adjust the illustrative example's suggestion count to your actual research objective.

## When blocked

Record the last successful step and why progress stopped. Do not give the tester broader privileges to force a successful outcome. The operator checks evidence against the agreed task; a genuine failed walkthrough can be a useful accepted finding when that outcome was included in the brief.

## Try the request locally

```sh
mkdir -p .local
node examples/user-test/run.mjs --explore
node examples/user-test/run.mjs --prepare .local/user-test.json
```

Review the private draft. Preparation is offline; submission is a separate explicit command. [Submission and retry instructions](../examples/README.md) · [Request client access](https://github.com/max7819/manpower/issues/new?template=client-access.yml).

This is a delegation guide, not a completed customer case. Supply, price and timing require consultation.

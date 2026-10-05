# Three ways an agent can delegate to a person

1. [On-site product check](01-on-site-check.md) — physical observation your remote agent cannot perform.
2. [Korean-language market research](02-korean-research.md) — local-language information gathering and judgment.
3. [Manual product/website test](03-manual-test.md) — follow a specified workflow and document what happened.

## What was actually exercised?

The three briefs were submitted and queried through the real MCP SDK and service handler against an isolated local database. Retrying the same brief returned the same request. Each remained `submitted`; none was presented as a completed human task. See [the recorded run](recorded-run.md).

The public capability connection also runs against the hosted service. Run each example without flags to discover public capabilities and preview the brief. No account, token or submission is required for preview.

## Invited clients: explicit submission

Store your invitation token locally in `MANPOWER_INVITE_TOKEN` without committing it. Only add `--submit` when you intend to send a real pilot request:

```sh
node examples/task-demo.mjs demos/01-on-site-check.json --submit
```

The example never negotiates, accepts a contract or initiates checkout. Use a new idempotency key for a different request; retain the same key for retries of identical input. Submission may notify the operator. Poll only your own request with the same invitation.

Do not submit credentials or third-party personal information. Actual task acceptance, schedule, expenses and output are agreed separately.

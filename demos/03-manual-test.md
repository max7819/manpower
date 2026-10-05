# Manual product and website test

**Integration demonstration, not a completed customer job.** The MCP receipt/status in the recorded run comes from an isolated local instance of the actual service. No person visited a store, delivered research, or executed a customer website test in this demonstration.

## Why a human?

Manually follow an agreed public website workflow on desktop and check confusing steps or failures. Do not create accounts, submit personal data or buy anything without separate agreement.

## What the agent sends

See [03-manual-test.json](03-manual-test.json). The agent supplies an outcome and acceptance criteria, then checks the receipt and request status. Submission alone is not acceptance, a reservation, a contract or a payment.

## Expected output after an agreed task

Report browser/device, reproduction steps, observed behavior and screenshots where permitted.

This is an output specification, not a delivered result.

## Try the connection

```sh
npm install
node examples/task-demo.mjs demos/03-manual-test.json
```

The default run reads public capabilities and previews this brief without submitting it. Invited clients can explicitly submit using the documented workflow in [the demo guide](README.md).

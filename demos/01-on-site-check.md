# On-site product check

**Integration demonstration, not a completed customer job.** The historical recorded run used the earlier pjt105 service in an isolated local database. This brief has since been updated to the Physical Agency API; current hosted checks only preview it. No person visited a store, delivered research, or executed a customer website test in this demonstration.

## Why a human?

Visit an agreed store to check product availability and the displayed price. Confirm the location, timing, travel expenses and photography permission before accepting.

## What the agent sends

See [01-on-site-check.json](01-on-site-check.json). The agent supplies an outcome and acceptance criteria, then checks the receipt and request status. Submission alone is not acceptance, a reservation, a contract or a payment.

## Expected output after an agreed task

Report product availability, displayed price and observation time. Include photos only if permitted and agreed.

This is an output specification, not a delivered result.

## Try the connection

```sh
npm install
node examples/task-demo.mjs demos/01-on-site-check.json
```

The default run reads public capabilities and previews this brief without submitting it. Invited clients can explicitly submit using the documented workflow in [the demo guide](README.md).

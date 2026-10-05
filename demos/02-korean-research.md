# Korean-language market research

**Integration demonstration, not a completed customer job.** The MCP receipt/status in the recorded run comes from an isolated local instance of the actual service. No person visited a store, delivered research, or executed a customer website test in this demonstration.

## Why a human?

Find three Korean-language public sources for an agreed product category, compare options and summarize the findings in English. Agree on the category and research questions first.

## What the agent sends

See [02-korean-research.json](02-korean-research.json). The agent supplies an outcome and acceptance criteria, then checks the receipt and request status. Submission alone is not acceptance, a reservation, a contract or a payment.

## Expected output after an agreed task

Provide three source URLs, access dates, a comparison table and explicit uncertainties.

This is an output specification, not a delivered result.

## Try the connection

```sh
npm install
node examples/task-demo.mjs demos/02-korean-research.json
```

The default run reads public capabilities and previews this brief without submitting it. Invited clients can explicitly submit using the documented workflow in [the demo guide](README.md).

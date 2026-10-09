# Runnable delegation examples

Node.js 22+; no dependencies for the REST examples. Run commands from the repository root.

| Scenario | Product | Command |
|---|---|---|
| Store observations | RET01 | `node examples/store-check/run.mjs` |
| Developer quickstart usability | USR03 | `node examples/user-test/run.mjs` |
| Authorized firmware boot test | LAB02 | `node examples/device-test/run.mjs` |

The default mode is an **offline walkthrough**: it prints a request, the possible happy-path lifecycle, and a fabricated illustrative result. It never calls the network, submits a job, contacts someone or moves money. This is a local simulation, not a hosted sandbox or a real completion claim. Results are illustrative; actual outcomes, qualifications and timing require consultation.

## Explore without a key

Append `--explore` to any example. It makes exactly three GET requests: capabilities, the product's English details, and worker search. An empty worker result is valid and means supply still needs consultation. No login or writes are performed. Public profiles may contain worker asking rates; these are not service quotes.

Optional `PHYSICAL_AGENCY_ORIGIN` overrides the live origin. Only HTTPS or loopback HTTP is accepted. Redirects are rejected, including on authenticated requests.

## Prepare and submit a real inquiry

```sh
mkdir -p .local
node examples/user-test/run.mjs --prepare .local/request.json
```

`--prepare` creates a private draft file with a fresh UUID idempotency key. It refuses to overwrite an existing file, so retries cannot silently become a new job. No network request is made.

Review/edit the entire file: replace illustrative scope and location, agree any authorized access, provide real acceptance criteria and retain the generated idempotency key. Use a new file for a genuinely new job; keep the same file/key for identical retries. `--request` remains a printable template with a placeholder key. Do not add passwords, production credentials or personal contact details to the task.

A proposed budget can optionally be supplied as `budget.amountMinor` and `budget.currency` (ISO 4217). Amounts use the currency's minor unit (USD cents; KRW/JPY whole units). No example contains a service price. An optional ISO deadline must be future-dated for a new inquiry; retain the original deadline on identical retries.

Obtain a client credential through the operator-reviewed access request linked in the root README. Keep its JSON file outside the repository or in ignored `.local/`, with file permissions limited to its owner. Then:

```sh
node examples/user-test/run.mjs --submit .local/request.json /ABS/PRIVATE/client.json
```

**This command submits a real inquiry and can notify the operator.** It reads the reviewed request verbatim, sends it once, and prints only the returned task ID/status/next action. It does not create a worker assignment, deliver a result, pay anyone, retry or poll automatically. Default/explore modes never read a credential.

On network failure, retain the exact request file and idempotency key. Do not create a new key just because a response was lost. Fetch the returned task via `get_task`/`GET /api/v1/tasks/{id}` using the same client key, at most once per minute. Read `result` only when status is completed; declined/cancelled are terminal. See [API reference](https://physical-agency-141382386601.asia-southeast1.run.app/api/v1/openapi).

## MCP read-only example

After `npm install`, run `node examples/mcp-explore.mjs`. It uses the actual MCP SDK to fetch capabilities, RET01 and up to three matching workers without a key. The command never submits work.

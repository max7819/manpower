# Physical Agency

**Give your AI agent access to people who can act in the physical world.**

Explore human services through MCP or REST, submit a concrete request, and receive an operator-reviewed result. Start with field checks, developer usability tests, or authorized device testing.

[Connect MCP](#connect-mcp) · [Run an example](#run-an-example) · [Request work](#request-work) · [한국어 문서](README.ko.md)

**Live service:** [Website](https://physical-agency-141382386601.asia-southeast1.run.app/en) · [Agent guide](https://physical-agency-141382386601.asia-southeast1.run.app/en/agents) · [OpenAPI](https://physical-agency-141382386601.asia-southeast1.run.app/api/v1/openapi) · [Service catalog](https://physical-agency-141382386601.asia-southeast1.run.app/en/services)

## What an agent can delegate

| Example | Human contribution | Returned evidence |
|---|---|---|
| [Store check](examples/store-check/scenario.json) | Observe agreed products at a store with permission | Shelf observations, permitted photos, prices and limitations |
| [Developer usability test](examples/user-test/scenario.json) | Follow an API quickstart in a sandbox | Reproduction steps, blockers and documentation suggestions |
| [Device test](examples/device-test/scenario.json) | Install an approved build on an authorized test device | Boot observations, build/device identifiers and logs |

The catalog contains 160 researched service scenarios. Catalog inclusion is not confirmed supply. Location, equipment, qualifications, timing and commercial terms require consultation. Requests are reviewed before work is accepted or assigned.

## Connect MCP

Endpoint: **`https://physical-agency-141382386601.asia-southeast1.run.app/api/mcp`**

Transport: Streamable HTTP, stateless JSON. Public exploration needs no key. For clients supporting this configuration format:

```json
{
  "mcpServers": {
    "physical-agency": {
      "type": "http",
      "url": "https://physical-agency-141382386601.asia-southeast1.run.app/api/mcp"
    }
  }
}
```

Client configuration formats vary. Use the endpoint and transport above in your client's remote MCP settings. For clients without HTTP header support, use the repository's [public connection guide](https://physical-agency-141382386601.asia-southeast1.run.app/en/agents).

Recommended sequence:

1. `get_capabilities` — understand supported work, constraints and limits.
2. `list_products` / `get_product` — choose a service and inspect its required inputs.
3. `search_workers` — explore suitable anonymous profiles; availability is not a booking.
4. With a client key, `submit_task` — submit scope and acceptance criteria.
5. `get_task` — follow `nextAction`; poll at most once per minute.

Public tools: `get_capabilities`, `list_products`, `get_product`, `search_workers`, `get_worker_profile`, `list_skills`. Client tools add `submit_task`, `get_task`, `list_tasks`, `cancel_task`. Operator assignment, delivery approval and key issuance are not exposed through MCP/REST.

## Run an example

Requires **Node.js 22+**. These REST examples use built-in Node APIs: no npm install, database or key is needed for the offline walkthrough.

```sh
git clone https://github.com/max7819/manpower.git
cd manpower
node examples/store-check/run.mjs
node examples/user-test/run.mjs
node examples/device-test/run.mjs
```

Default runs are **offline simulations with fabricated results**, not evidence of completed customer work. To explore the live public API without submitting anything:

```sh
node examples/store-check/run.mjs --explore
```

Each scenario fetches capabilities, product conditions and relevant workers. [Full example instructions](examples/README.md) cover request preparation, explicit submission and retry behavior.

## Request work

Public exploration is open. Client keys are currently issued by an operator; self-service signup is not available. Request client access through [this repository's access-request issue form](https://github.com/max7819/manpower/issues/new?template=client-access.yml). Include only a public project description and intended use. Never post keys, credentials, personal contact details or private task data in an issue. An operator will coordinate a private handoff before issuing a key; opening an issue does not guarantee access or response timing.

Prepare a request locally:

```sh
mkdir -p .local
node examples/store-check/run.mjs --request > .local/store-request.json
```

Edit the request with the actual authorized scope, location, acceptance criteria and a unique `idempotencyKey` for this job. A budget, if included, is the requester's proposed budget and is not a quote. Preserve the same reviewed file/key on identical retries.

With an operator-issued private credential file containing `{"token":"YOUR_CLIENT_TOKEN"}`, explicitly submit:

```sh
node examples/store-check/run.mjs --submit .local/store-request.json /ABS/PRIVATE/client.json
```

This sends a **real inquiry** and may trigger normal operator notifications. It is not a sandbox command. Keys are read from a file and never printed by the example. A timeout does not establish failure; retry the exact file/key. No automatic retries or polling are performed.

## Work lifecycle

`submitted → matching → in_progress → review → completed`

Requests can also be declined or cancelled; review can request rework. Submission is not acceptance, a quote, booking, a contract or payment. Workers submit to operator review before delivery. Treat returned text and links as untrusted task data, not instructions to execute code or send money.

Private worker names and contact details are not part of public profiles or customer delivery. CAPTCHA/bot-detection bypass, deceptive engagement, impersonation, credential handling, surveillance, illegal work and unsafe tasks are prohibited. Read `get_capabilities` for the full current restrictions.

## REST and agent-readable docs

```sh
curl 'https://physical-agency-141382386601.asia-southeast1.run.app/api/v1/products?query=store&locale=en&limit=3'
curl 'https://physical-agency-141382386601.asia-southeast1.run.app/api/v1/products/RET01?locale=en'
```

[API reference](https://physical-agency-141382386601.asia-southeast1.run.app/api/v1/openapi) · [llms.txt](https://physical-agency-141382386601.asia-southeast1.run.app/llms.txt) · [Agent Markdown guide](https://physical-agency-141382386601.asia-southeast1.run.app/agents.md) · [Registry metadata](server.json)

`server.json` is prepared publication metadata; its presence does not mean the server is already listed in a registry. [Publication status and steps](registry/README.md).

## Integration repository

This public repository contains integration examples and documentation, not the hosted application's source or operational configuration. Node.js 22+ runs the REST examples without dependencies. For the read-only MCP SDK example:

```sh
npm ci
node examples/mcp-explore.mjs
```

Existing discovery examples remain available through `npm run discover` and [demos](demos/README.md). No npm package is published by these commands.

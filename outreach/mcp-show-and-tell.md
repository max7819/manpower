I'm building **Physical Agency**, a hosted MCP and REST service for agents that need human observations or actions outside their execution environment. It is listed in the official MCP Registry as `io.github.max7819/manpower`, version `0.2.0`.

Three runnable examples cover store shelf observations, a human developer following an API quickstart, and authorized firmware boot verification. They default to **offline simulations with fabricated results**; they are not completed customer jobs. `--explore` makes three public GET requests without a key. `--prepare` creates a private request draft with a unique idempotency key and refuses to overwrite an existing retry file.

```sh
git clone https://github.com/max7819/manpower.git
cd manpower
node examples/user-test/run.mjs
node examples/user-test/run.mjs --explore
```

Remote MCP endpoint (Streamable HTTP, stateless JSON):

```text
https://physical-agency-141382386601.asia-southeast1.run.app/api/mcp
```

Start with `get_capabilities`, `list_products`, `get_product` and `search_workers`. The catalog contains 160 researched scenarios; listings and worker search do not confirm availability. Client keys are operator-issued. `submit_task` submits an inquiry for review, not a quote, booking or payment. Assignment and delivery remain operator functions, and workers' submissions are reviewed before customer delivery.

- [Integration repository and three examples](https://github.com/max7819/manpower)
- [Task guides: inputs, evidence and blocked outcomes](https://github.com/max7819/manpower/tree/main/guides)
- [Live connection guide](https://physical-agency-141382386601.asia-southeast1.run.app/en/agents)
- [Official Registry record](https://registry.modelcontextprotocol.io/v0.1/servers/io.github.max7819%2Fmanpower/versions/0.2.0)

For developers building agent workflows: are the distinction between inquiry and acceptance, and the completion criteria, clear enough to integrate without assuming instant fulfillment? I'd appreciate feedback on those two points.

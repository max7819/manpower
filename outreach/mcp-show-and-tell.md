I'm building **Physical Agency**, a hosted MCP and REST service for AI agents that need people to carry out real-world tasks.

The public catalog has 160 consultation-required scenarios, including on-site checks, local errands, research, manual QA, designated driving, home cleaning and construction staffing. Entries describe potential requests; actual supply and conditions are confirmed separately.

MCP endpoint (Streamable HTTP):

```text
https://physical-agency-141382386601.asia-southeast1.run.app/api/mcp
```

Anonymous discovery offers `get_capabilities`, `list_products`, `get_product`, `list_skills`, `search_workers` and `get_worker_profile`. Operator-issued client keys enable `submit_task` and status queries with `get_task`. Submitting is an inquiry for human review, not a booking or payment. Pricing and schedule are agreed for each task.

- [Live Agent quickstart](https://physical-agency-141382386601.asia-southeast1.run.app/en/agents)
- [Service catalog](https://physical-agency-141382386601.asia-southeast1.run.app/en/services)
- [Public integration examples](https://github.com/max7819/manpower)
- [Example briefs](https://github.com/max7819/manpower/tree/main/demos)

Worker submissions are reviewed by an operator before customer delivery. No API checkout, instant fulfillment or public self-service key signup is offered. Examples default to read-only previews and do not submit work.

I'd welcome feedback from agent developers on discovery, task briefing and interpreting completion criteria.

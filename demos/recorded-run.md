# Recorded MCP integration run

**Scope:** actual MCP SDK requests against the real service handler and an isolated local test database. These are demo requests, not customer jobs or human-completed tasks.

Recorded at: 2026-10-05T22:51:58.101Z

| Demo | Receipt | Same-key retry | Status query | Human task completed |
|---|---|---|---|---|
| 01-on-site-check | submitted | Same request, duplicate=true | submitted | No |
| 02-korean-research | submitted | Same request, duplicate=true | submitted | No |
| 03-manual-test | submitted | Same request, duplicate=true | submitted | No |

All three requests remained submitted. No result was released. No quote, contract, payment, phone call or SMS was created. Demo rows were removed from the isolated test database after verification.

Live public discovery is separately checked by the preview examples; the hosted service was not given these demo requests.

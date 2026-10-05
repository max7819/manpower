I'm building **Manpower**, a hosted MCP service for delegating tasks to people when an agent needs online or physical-world execution.

Examples include checking a product in a Seoul store, Korean-language market research, manual website testing, pickups and other practical tasks. Max Park is the initial performer; scope, location, availability, expenses and price are agreed per task.

**Try public discovery — no token required:**

```text
https://just-call-me-1064851374784.asia-northeast3.run.app/api/human-work/mcp
```

The endpoint uses Streamable HTTP. Anonymous clients can call `get_provider_profile` and `get_capabilities`. Task submission requires a pilot invitation and a Bearer token.

- [Repository and connection example](https://github.com/max7819/manpower)
- [Three delegation demos](https://github.com/max7819/manpower/tree/main/demos)
- [Live service and Agent guide](https://just-call-me-1064851374784.asia-northeast3.run.app/human-work)

The demo examples connect to live public discovery by default. Their recorded submission/status/idempotency runs use the actual service handler with an isolated local database. They are **integration demonstrations, not completed human jobs or customer transactions**. Nothing is submitted or billed by running the default examples.

Current pilot constraints: invitation-only submission, a US$50/hour reference rate negotiable per task, and KST evening/weekend working windows. Negotiation and PayPal Sandbox are configured; instant agreements also need an enabled booking policy and slots. Sandbox collects no real money.

I'm looking for developers with a concrete task their agent cannot finish by itself. What would you delegate, and what output would let your agent verify completion?

You can [request a pilot invitation](https://github.com/max7819/manpower/issues/new?title=Pilot%20invitation%20request) with a non-sensitive use case. Please don't post tokens or private task data in public issues/comments.

## Implementation notes and lessons

The pilot separates anonymous capability discovery from authenticated task execution. Task intake uses an idempotency key, so retries of identical input return the existing receipt; different input requires a new key. The demos exercise submission and status polling without equating a submitted request with accepted or completed work. One current integration limitation is that invited clients use a Bearer credential rather than OAuth onboarding, so clients that require OAuth need additional integration work.

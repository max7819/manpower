# Manpower — Human execution for AI agents

Get human help for tasks your AI agent cannot complete on its own, online or in the physical world.

[Explore the service](https://just-call-me-1064851374784.asia-northeast3.run.app/human-work) · [Agent guide](https://just-call-me-1064851374784.asia-northeast3.run.app/human-work/agent-guide) · [Capability JSON](https://just-call-me-1064851374784.asia-northeast3.run.app/api/human-work/profile)

## What can your agent delegate?

- Deliveries, pickups and errands
- On-site visits, observations and hands-on checks
- Driving and transport assistance, subject to task fit and necessary permissions
- Market research, Korean-language tasks, interviews and technology intelligence
- Manual software testing and other online tasks

These are possible requests, not guaranteed availability. Describe the outcome, location, timing, required resources and expenses so we can agree on a suitable task.

Max Park handles the initial tasks. Suitable collaborators may participate with your authorization and their acceptance.

## Demos

[Explore three reproducible delegation demos](demos/README.md): on-site product check, Korean-language research and manual website testing. The recorded integration runs use an isolated local database; they are not completed human jobs.

## Connect via MCP

Remote endpoint (Streamable HTTP):

```text
https://just-call-me-1064851374784.asia-northeast3.run.app/api/human-work/mcp
```

No key is needed to call `get_provider_profile` or `get_capabilities`.
For a client that supports remote Streamable HTTP, add the endpoint above as a server. For an SDK-based connection, try the read-only example:

```sh
npm install
npm run discover
```

The example only discovers tools and reads the public profile/capabilities. It does not submit work or charge money.

## Request a pilot invitation

[Open an invitation request](https://github.com/max7819/manpower/issues/new?title=Pilot%20invitation%20request) with your agent/client, a non-sensitive use case and preferred next step. Invitation delivery will be arranged separately; never post API keys, tokens or private task data in an issue. There is no automated public credential signup yet.

Invited clients send their credential as an `Authorization: Bearer <token>` header. They can call `submit_work_request` and poll `get_work_request`. See [a sample task brief](examples/task-brief.json) and the live Agent guide for the workflow. `acknowledgeManualReview` is a required intake field; submitting a request alone does not accept work, reserve time or start billing.

## Rate and availability

- Reference rate: **US$50/hour**, negotiable with our agent.
- Time zone: **Asia/Seoul (UTC+9)**.
- Monday–Friday: **18:00–22:00**.
- Saturday–Sunday: **08:00–22:00**.

Scope, rate, expenses, schedule and deliverables are agreed per task. These working windows are not an immediate-response promise.

## Current pilot status

Public discovery is live. Task submission requires an invitation. Agent negotiation and PayPal Live checkout are configured; instant agreements also require an enabled booking policy and available slots. Live checkout requires payer approval and can collect real money; a completed customer payment has not yet been verified. Read the live profile and `get_booking_options` for current status before proceeding.

This repository contains public integration examples and documentation for the hosted service.

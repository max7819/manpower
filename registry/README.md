# Registry publication review — 2026-10-06

`server.json` is a **draft**, not evidence of Registry acceptance or a live listing.

## Official MCP Registry

- The remote endpoint uses Streamable HTTP and is publicly reachable. Anonymous SDK discovery currently exposes `get_provider_profile` and `get_capabilities` only.
- The draft uses `io.github.max7819/manpower`. GitHub ownership authentication is required before publication.
- The public repository contains integration documentation/examples, not the hosted server's source; the draft therefore omits a source repository assertion.
- Invited clients can submit tasks, but there is no automated public onboarding yet. Verify the Registry's public-server eligibility for the current invitation-only execution workflow before listing the full workflow. A public discovery-only listing must accurately describe that limitation.
- Do not publish access tokens or represent this draft as installed in Agent products.

Official sources: [Registry overview](https://modelcontextprotocol.io/registry/about), [GitHub authentication](https://modelcontextprotocol.io/registry/authentication), [remote servers](https://modelcontextprotocol.io/registry/remote-servers), [server.json](https://github.com/modelcontextprotocol/registry/blob/main/docs/reference/server-json/generic-server-json.md).

## Smithery

Smithery supports publishing hosted Streamable HTTP servers by URL. Public server metadata can be scanned without authentication. For an authenticated workflow, its current URL publishing guide requires OAuth support; Manpower currently uses manually issued Bearer invitations rather than an OAuth onboarding flow.

A discovery-only listing is a candidate for scanning. Full authenticated task execution needs compatibility work and verification first. No Smithery account was created, authorization granted or listing published in this review.

Official source: [Smithery publishing requirements](https://smithery.ai/docs/build/publish).

## Next steps

1. Validate publisher ownership and current Registry eligibility for a discovery-only pilot listing.
2. Publish only after that check, accurately marking invited submission and current payment status (Live checkout enabled as of 2026-10-06; no completed customer payment verified).
3. Test Smithery's anonymous scan; define and test an OAuth/onboarding design before promoting authenticated execution there.
4. Track listings, connections and actual task submissions separately.

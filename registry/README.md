# Physical Agency — distribution and registry publication

Prepared 2026-10-09. This document distinguishes ready assets from completed external publication.

## Publication payload

- Registry name: `io.github.max7819/manpower` (GitHub namespace; no unconfirmed custom domain).
- Title: Physical Agency; version: `0.2.0`.
- Public integration examples (not hosted server source): https://github.com/max7819/manpower
- Website: https://physical-agency-141382386601.asia-southeast1.run.app/en/agents
- Remote: https://physical-agency-141382386601.asia-southeast1.run.app/api/mcp (`streamable-http`).
- Exact metadata: [server.json](../server.json); historical draft synchronized in [registry/server.json](server.json).
- Public tools are available without authentication. Client work submission needs an operator-issued Bearer key. This metadata advertises public exploration, not anonymous submission or OAuth.
- No npm package publication is required for this remote-server entry. The application package stays private.

## Official Registry

Official sources checked: [remote servers](https://modelcontextprotocol.io/registry/remote-servers), [publication guide](https://modelcontextprotocol.io/registry/quickstart), [schema](https://static.modelcontextprotocol.io/schemas/2025-12-11/server.schema.json), [namespace requirements](https://github.com/modelcontextprotocol/registry/blob/main/docs/reference/server-json/official-registry-requirements.md).

Before publication, inspect the exact root `server.json`, validate it against the official schema, and verify the live public MCP tools. Check for an existing name/version to avoid overwriting or duplicate claims. GitHub authentication must belong to max7819; do not extract another application's tokens or commit publisher credentials.

After installing the official `mcp-publisher`, run from the repository root:

```sh
mcp-publisher login github
mcp-publisher publish
```

The account owner completes GitHub device authorization. This is account authorization, not an application API key. Keep publisher credential files out of Git. If a version already exists, inspect it and make an explicit version decision rather than silently incrementing or replacing it.

After successful publication, verify the exact name/version/remote URL through the Registry API:

```sh
curl 'https://registry.modelcontextprotocol.io/v0.1/servers?search=io.github.max7819%2Fmanpower'
```

Record the returned publication status and timestamp here. **A committed server.json or open GitHub PR does not mean the server is registered.**

## Other directories

[Smithery publication requirements](https://smithery.ai/docs/build/publish) specify Streamable HTTP and OAuth if authentication is required. Public exploration is compatible in principle; the client-key submission flow must not be presented as OAuth-compatible. Verify authenticated connectivity before advertising full submission support there. Glama and other directories can point to the public repository; do not claim a listing until its public page exists.

## Launch sequence

1. Publish developer README, three runnable examples, public access-request issue template and server.json together.
2. Complete official Registry account authorization and publish/verify the exact entry.
3. Confirm search-engine index coverage for the live origin and sitemap; choose a custom domain separately.
4. Turn one scenario into a real permissioned completed example before promoting its outcome as a case study. Current sample results are fabricated simulations.
5. Publish demonstrations to developer communities only after reviewing exact text/media. Do not mass-message people or create unsupported success claims.

Measure: referring source → public tool usage → access requests → valid inquiries → completed jobs → repeat customers. Directory presence, search index inclusion and a successful tool invocation are separate milestones; none guarantees the next.

## Validation status — 2026-10-09

Official JSON schema validation passed. Three REST exploration examples and the read-only MCP SDK example passed against the live service. All three scenario searches currently returned zero workers; no supply or fulfillment is claimed. Default offline runs and credential/redirect/retry tests passed. The initial Official Registry lookup timed out; a later retry succeeded and returned no matching entries for this exact namespace. Publication is pending account-owner GitHub device authentication; no Registry publication has been performed. The previously proposed GitHub namespace and metadata version are preserved.

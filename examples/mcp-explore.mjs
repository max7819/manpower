import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import { DEFAULT_ORIGIN, originUrl } from './shared/run.mjs';
const client = new Client({ name: 'physical-agency-readonly-example', version: '0.1.0' });
try {
  await client.connect(new StreamableHTTPClientTransport(new URL(originUrl(process.env.PHYSICAL_AGENCY_ORIGIN ?? DEFAULT_ORIGIN) + '/api/mcp')));
  for (const [name, args] of [['get_capabilities', {}], ['get_product', { productId: 'RET01', locale: 'en' }], ['search_workers', { category: 'field_check', mode: 'onsite', countryCode: 'KR', city: 'Seoul', languages: ['en'], limit: 3 }]]) {
    const result = await client.callTool({ name, arguments: args });
    if (result.isError) throw new Error('Tool failed');
    console.log(JSON.stringify({ tool: name, data: result.structuredContent ?? result.content }, null, 2));
  }
} catch {
  console.error('MCP exploration failed. Check endpoint/connectivity. No work was submitted.');
  process.exitCode = 1;
} finally { await client.close(); }

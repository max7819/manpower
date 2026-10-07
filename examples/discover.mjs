import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';

const endpoint = new URL('https://physical-agency-141382386601.asia-southeast1.run.app/api/mcp');
const client = new Client({ name: 'physical-agency-public-discovery', version: '0.2.0' });
try {
  await client.connect(new StreamableHTTPClientTransport(endpoint));
  const tools = await client.listTools();
  console.log(JSON.stringify({ tools: tools.tools.map(tool => tool.name) }, null, 2));
  for (const [name, args] of [
    ['get_capabilities', {}],
    ['list_products', { query: 'designated driver', locale: 'en', limit: 3 }],
    ['get_product', { productId: 'TRD001', locale: 'en' }],
  ]) {
    const result = await client.callTool({ name, arguments: args });
    if (result.isError) throw new Error(`Discovery failed: ${name}`);
    console.log(JSON.stringify({ tool: name, result: result.structuredContent ?? result.content }, null, 2));
  }
} finally { await client.close(); }

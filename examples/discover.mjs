import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';

const endpoint = new URL('https://just-call-me-1064851374784.asia-northeast3.run.app/api/human-work/mcp');
const client = new Client({ name: 'manpower-public-discovery', version: '0.1.0' });
try {
  await client.connect(new StreamableHTTPClientTransport(endpoint));
  console.log(JSON.stringify(await client.listTools(), null, 2));
  for (const name of ['get_provider_profile', 'get_capabilities']) {
    console.log(JSON.stringify(await client.callTool({ name, arguments: {} }), null, 2));
  }
} finally {
  await client.close();
}

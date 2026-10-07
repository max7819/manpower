import {readFile} from 'node:fs/promises';
import {Client} from '@modelcontextprotocol/sdk/client/index.js';
import {StreamableHTTPClientTransport} from '@modelcontextprotocol/sdk/client/streamableHttp.js';
const [file,flag]=process.argv.slice(2);
if(!file || (flag && flag!=='--submit')) throw new Error('Usage: node examples/task-demo.mjs demos/01-on-site-check.json [--submit]');
const brief=JSON.parse(await readFile(file,'utf8'));
const submit=flag==='--submit';
if(submit && !process.env.PHYSICAL_AGENCY_CLIENT_TOKEN) throw new Error('Submitting requires a pilot invitation token in PHYSICAL_AGENCY_CLIENT_TOKEN. Never commit or print it.');
const client=new Client({name:'physical-agency-task-demo',version:'0.2.0'});
const url=new URL('https://physical-agency-141382386601.asia-southeast1.run.app/api/mcp');
try {
 await client.connect(new StreamableHTTPClientTransport(url,submit?{requestInit:{headers:{Authorization:`Bearer ${process.env.PHYSICAL_AGENCY_CLIENT_TOKEN}`}}}:{}));
 const capabilities=await client.callTool({name:'get_capabilities',arguments:{}});
 if(capabilities.isError) throw new Error('Capability discovery failed');
 console.log(JSON.stringify({mode:submit?'submit':'preview',brief},null,2));
 if(!submit) console.log('Public MCP discovery succeeded. No request was submitted and no payment was made.');
 else {
  const receipt=await client.callTool({name:'submit_task',arguments:brief});
  if(receipt.isError) throw new Error('Submission failed; check scope, schema, invitation and idempotency key.');
  const data=receipt.structuredContent ?? JSON.parse(receipt.content.find(item=>item.type==='text').text);
  console.log(JSON.stringify({receipt:data},null,2));
  console.log(JSON.stringify(await client.callTool({name:'get_task',arguments:{taskId:data.task.id}}),null,2));
 }
} finally {await client.close();}

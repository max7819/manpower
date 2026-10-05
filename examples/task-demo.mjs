import {readFile} from 'node:fs/promises';
import {Client} from '@modelcontextprotocol/sdk/client/index.js';
import {StreamableHTTPClientTransport} from '@modelcontextprotocol/sdk/client/streamableHttp.js';
const [file,flag]=process.argv.slice(2);
if(!file || (flag && flag!=='--submit')) throw new Error('Usage: node examples/task-demo.mjs demos/01-on-site-check.json [--submit]');
const brief=JSON.parse(await readFile(file,'utf8'));
const submit=flag==='--submit';
if(submit && !process.env.MANPOWER_INVITE_TOKEN) throw new Error('Submitting requires a pilot invitation token in MANPOWER_INVITE_TOKEN. Never commit or print it.');
const client=new Client({name:'manpower-task-demo',version:'0.1.0'});
const url=new URL('https://just-call-me-1064851374784.asia-northeast3.run.app/api/human-work/mcp');
try {
 await client.connect(new StreamableHTTPClientTransport(url,submit?{requestInit:{headers:{Authorization:`Bearer ${process.env.MANPOWER_INVITE_TOKEN}`}}}:{}));
 const capabilities=await client.callTool({name:'get_capabilities',arguments:{}});
 if(capabilities.isError) throw new Error('Capability discovery failed');
 console.log(JSON.stringify({mode:submit?'submit':'preview',brief},null,2));
 if(!submit) console.log('Public MCP discovery succeeded. No request was submitted and no payment was made.');
 else {
  const receipt=await client.callTool({name:'submit_work_request',arguments:brief});
  if(receipt.isError) throw new Error('Submission failed; check scope, schema, invitation and idempotency key.');
  const data=JSON.parse(receipt.content.find(item=>item.type==='text').text);
  console.log(JSON.stringify({receipt:data},null,2));
  console.log(JSON.stringify(await client.callTool({name:'get_work_request',arguments:{requestId:data.request.id}}),null,2));
 }
} finally {await client.close();}

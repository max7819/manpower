import { describe, it, mock } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { explore, submitReviewedRequest } from '../examples/shared/run.mjs';
describe('public delegation examples', () => {
  it('all defaults work offline without dependencies or credentials', () => {
    for (const name of ['store-check','user-test','device-test']) {
      const result=spawnSync(process.execPath,[`examples/${name}/run.mjs`],{encoding:'utf8',env:{...process.env,PHYSICAL_AGENCY_ORIGIN:'https://must-not-be-called.invalid'}});
      assert.equal(result.status,0);assert.match(JSON.parse(result.stdout).mode,/offline simulation/);
    }
  });
  it('exploration makes only three unauthenticated GET calls', async () => {
    const scenario=JSON.parse(await readFile(new URL('../examples/store-check/scenario.json',import.meta.url),'utf8'));
    const fetcher=mock.fn(async()=>new Response('{}'));
    await explore(scenario,'https://example.test',fetcher);
    assert.equal(fetcher.mock.callCount(),3);
    for(const call of fetcher.mock.calls){assert.equal(call.arguments[1].method,'GET');assert.equal(call.arguments[1].headers,undefined);}
  });
  it('unsafe origins never receive a credential', async () => {
    const fetcher=mock.fn();
    for(const origin of ['http://external.test','https://user:pass@example.test','https://example.test/path'])
      await assert.rejects(submitReviewedRequest('{"idempotencyKey":"retry-key","acknowledgeHumanReview":true}','mpc_'+'a'.repeat(43),origin,fetcher));
    assert.equal(fetcher.mock.callCount(),0);
  });
  it('submission retains exact retry bytes, prevents redirects and suppresses response secrets', async () => {
    const body='{ "idempotencyKey":"retry-key", "acknowledgeHumanReview":true }';
    const fetcher=mock.fn(async()=>Response.json({id:'example',status:'submitted',result:'private-body'}));
    const result=await submitReviewedRequest(body,'mpc_'+'a'.repeat(43),'https://example.test',fetcher);
    assert.equal(fetcher.mock.callCount(),1);assert.equal(fetcher.mock.calls[0].arguments[1].body,body);
    assert.equal(fetcher.mock.calls[0].arguments[1].redirect,'error');assert.equal(result.result,undefined);
    await assert.rejects(submitReviewedRequest(body,'mpc_'+'a'.repeat(43),'https://example.test',async()=>new Response('reflected-secret',{status:503})),/HTTP 503/);
  });
});

import { it } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, stat, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { prepareRequest } from '../examples/shared/run.mjs';

it('preparation creates distinct private drafts and cannot overwrite a retry file', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'physical-draft-'));
  try {
    const task = { title: 'Reviewed scope', idempotencyKey: 'placeholder' };
    const first = join(dir, 'first.json');
    const second = join(dir, 'second.json');
    await prepareRequest(task, first);
    const original = await readFile(first, 'utf8');
    await prepareRequest(task, second);
    const one = JSON.parse(original), two = JSON.parse(await readFile(second, 'utf8'));
    assert.match(one.idempotencyKey, /^[0-9a-f-]{36}$/);
    assert.notEqual(one.idempotencyKey, two.idempotencyKey);
    assert.equal(one.title, task.title);
    assert.equal((await stat(first)).mode & 0o777, 0o600);
    await assert.rejects(prepareRequest({title:'changed'}, first), {code:'EEXIST'});
    assert.equal(await readFile(first, 'utf8'), original);
    assert.equal(task.idempotencyKey, 'placeholder');
  } finally { await rm(dir, {recursive:true, force:true}); }
});

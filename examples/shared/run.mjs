import { readFile } from 'node:fs/promises';

export const DEFAULT_ORIGIN = 'https://physical-agency-141382386601.asia-southeast1.run.app';

export function originUrl(value = DEFAULT_ORIGIN) {
  const url = new URL(value);
  if (url.username || url.password || url.search || url.hash || url.pathname !== '/') throw new Error('Use an origin without credentials, path, query or fragment.');
  if (url.protocol !== 'https:' && !(url.protocol === 'http:' && ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname))) throw new Error('HTTPS is required outside loopback.');
  return url.origin;
}

export async function explore(scenario, origin, fetcher = fetch) {
  const task = scenario.task;
  const query = new URLSearchParams({ mode: task.mode, category: task.category, skills: task.requiredSkills.join(','), languages: task.languages.join(','), limit: '3' });
  if (task.countryCode) query.set('countryCode', task.countryCode);
  if (task.city) query.set('city', task.city);
  const paths = ['/api/v1/capabilities', `/api/v1/products/${task.productId}?locale=en`, `/api/v1/workers?${query}`];
  const results = [];
  for (const path of paths) {
    const res = await fetcher(originUrl(origin) + path, { method: 'GET', redirect: 'error', signal: AbortSignal.timeout(15000) });
    if (!res.ok) throw new Error(`Public exploration failed: HTTP ${res.status}.`);
    results.push(await res.json());
  }
  return { capabilities: results[0], product: results[1], workers: results[2], note: 'Catalog entries and search results do not confirm availability or a booking.' };
}

export async function submitReviewedRequest(body, token, origin, fetcher = fetch) {
  if (!/^mpc_[A-Za-z0-9_-]{43}$/.test(token ?? '')) throw new Error('A client credential file containing a valid token is required.');
  // Send the reviewed file verbatim: retries must retain both its body and key.
  const request = JSON.parse(body);
  if (!request.idempotencyKey || request.acknowledgeHumanReview !== true) throw new Error('The request needs idempotencyKey and acknowledgeHumanReview=true.');
  const res = await fetcher(originUrl(origin) + '/api/v1/tasks', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body, redirect: 'error', signal: AbortSignal.timeout(15000) });
  if (!res.ok) throw new Error(`Submission returned HTTP ${res.status}. Keep the exact file/key for retries; inspect the API error privately. A timeout does not prove failure.`);
  const task = await res.json();
  return { id: task.id, status: task.status, nextAction: task.nextAction, note: 'Received for operator review; not acceptance, a quote, booking or payment. Poll no more than once per minute.' };
}

export async function run(file, args) {
  try {
    const scenario = JSON.parse(await readFile(file, 'utf8'));
    const origin = process.env.PHYSICAL_AGENCY_ORIGIN ?? DEFAULT_ORIGIN;
    if (args.length === 0) {
      console.log(JSON.stringify({ mode: 'offline simulation — no network requests', request: scenario.task, lifecycle: ['submitted', 'matching', 'in_progress', 'review', 'completed'], sampleResult: scenario.sampleResult, note: 'Fabricated walkthrough, not a completed customer job. Real tasks can also be declined or cancelled; review can request rework.' }, null, 2));
    } else if (args.length === 1 && args[0] === '--request') {
      console.log(JSON.stringify(scenario.task, null, 2));
    } else if (args.length === 1 && args[0] === '--explore') {
      console.log(JSON.stringify(await explore(scenario, origin), null, 2));
    } else if (args.length === 3 && args[0] === '--submit') {
      const body = await readFile(args[1], 'utf8');
      const credential = JSON.parse(await readFile(args[2], 'utf8'));
      console.log(JSON.stringify(await submitReviewedRequest(body, credential.token, origin), null, 2));
    } else throw new Error('Usage: node examples/<name>/run.mjs [--request | --explore | --submit REQUEST_FILE CREDENTIAL_FILE]');
  } catch (error) {
    // Do not echo network errors, arbitrary API bodies or credential-file contents.
    console.error(error instanceof Error && /^(Usage:|Use an origin|HTTPS is required|A client credential|The request needs|Public exploration failed|Submission returned)/.test(error.message) ? error.message : 'Example failed. Check origin, input files and connectivity; keep credentials private.');
    process.exitCode = 1;
  }
}

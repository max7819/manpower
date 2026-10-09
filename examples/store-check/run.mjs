import { run } from '../shared/run.mjs';
await run(new URL('./scenario.json', import.meta.url), process.argv.slice(2));

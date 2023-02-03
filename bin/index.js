#!/usr/bin/env node

import { create } from 'create-svelte';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname + '/..');

async function main() {
  let configPath = path.resolve(projectRoot + '/examples/default.mjs');

  const argForConfig = process.argv[2];
  if (argForConfig) {
    configPath = path.resolve(argForConfig);
    console.log(`Reading "${configPath}" to create-svelte`)
  }
  else {
    console.warn(`configPath not provided, so reading a default config: "${configPath}" to create-svelte`)
  }

  const imported = await import(configPath)
  const config = imported.default;

  const argForName = process.argv[3];
  if (argForName) {
    console.log(`Overriding app's name to "${argForName}"`)
    config.name = argForName;
  }

  console.log('Using this config below to create-svelte')
  console.log(config)

  await create(config.name, config);

  console.log('Your app should be created. Run command below to verify')
  console.log(`ls ${config.name}`)
}

main();

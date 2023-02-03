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
    console.log(`reading "${configPath}" to create-svelte`)
  }
  else {
    console.warn(`configPath not provided, so reading a default config: "${configPath}" to create-svelte`)
  }

  const imported = await import(configPath)
  const config = imported.default;

  const argForName = process.argv[3];
  if (argForName) {
    console.log(`overriding app's name to "${argForName}"`)
    config.name = argForName;
  }

  console.log(`using this config below to create-svelte`)
  console.log(config)

  await create(config.name, config);

  console.log('your app should be created run command below to verify')
  console.log(`ls ${config.name}`)


  // console.log(
  //   imported.default
  // )
  //
  // console.log(
  //   path.resolve(cwd)
  // )
  // console.log(
  //   process.argv
  // )
  // console.log(__filename);
  // console.log(__dirname);
  // console.log(projectRoot);
}

main();

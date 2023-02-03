# create-svelte-with-config
## Why
[create-svelte](https://github.com/sveltejs/kit/tree/master/packages/create-svelte#api) currently doesn't accept a config file nor command flags

So until that feature is added this project might be useful to

## Examples

### Example With a Config With Hard-Coded Project Name

```bash
npm create svelte-with-config your-config-file.js
```

```javascript
// let's say this is your-config-file.js
// based on https://github.com/sveltejs/kit/tree/master/packages/create-svelte#api

export default { // always export this as default
  name: 'my-new-app-via-config',
  template: 'skeleton', // or 'default' or 'skeletonlib'
  types: 'typescript', // or 'checkjs' or null;
  vitest: true,
  eslint: true,
  prettier: true,
  playwright: false,
};
```

### Example With Overriding Name
```bash
npm create svelte-with-config another-config-file.js my-another-new-app
```

```javascript
// let's say this is another-config-file.js

export default {
  name: 'still-hard-code-name-in-config', // whatever your env that can deliver the name
  template: 'skeleton', // or 'default' or 'skeletonlib'
  types: 'typescript', // or 'checkjs' or null;
  vitest: false,
  eslint: false,
  prettier: false,
  playwright: false,
};
```

# create-svelte-with-config

This is a thin wrapper of [create-svelte](https://www.npmjs.com/package/create-svelte).
## Why
[create-svelte](https://github.com/sveltejs/kit/tree/master/packages/create-svelte#api) currently doesn't accept a config file nor command flags.
That leaves you with either enter things interactively or setup a project like this very one to tap into `create-svelte` programmatically which is not ideal.

So until that feature is added to upstream, this project should be useful to create svelte project quickly without having to interactively providing parameters.

## Examples

### Example With a Config With Hard-Coded Project Name

```javascript
// let's say this is your-config-file.js in your current working directory

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

Then now you can run this

```bash
npm create svelte-with-config your-config-file.js
```


### Example With Overriding Name
```javascript
// let's say this is another-config-file.js

export default {
  name: 'still-hard-coded-name-in-config',
  template: 'skeleton', // or 'default' or 'skeletonlib'
  types: 'typescript', // or 'checkjs' or null;
  vitest: false,
  eslint: false,
  prettier: false,
  playwright: false,
};
```

Then now you can run this to override the name

```bash
npm create svelte-with-config another-config-file.js my-another-new-app
```

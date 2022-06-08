# vite-plugin-md-es-resolution

Issue reproduction of es module resolution in vite-plugin-md

When used in a `type="module"` package, the resolutions of some `vite-plugin-md` dependencies seems to be broken by the fact that there is no automatic resolution of file extensions. Using `node --experimental-specifier-resolution=node node ./scripts/vite.dev.js` resolve this issue, but the flag is experimental and is not safe to use as per https://nodejs.org/api/esm.html#customizing-esm-specifier-resolution-algorithm.

**Start without the experimental flag**

```bash
$ npm run start
```

**Start with the experimental flag**

```bash
$ npm run start:exp
```

# vite-plugin-md-es-resolution
Issue reproduction of es module resolution in vite-plugin-md

When used in a `type="module"` package, the resolutions of some `vite-plugin-md` dependencies seems to be broken by the fact that there is no automatic resolution of file extensions. Using `node --experimental-specifier-resolution=node node ./scripts/vite.dev.js` resolve this issue, but the flag is experimental and not safe to use https://nodejs.org/api/esm.html#customizing-esm-specifier-resolution-algorithm.

```bash
$ npm i && npm run start
```

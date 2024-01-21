# TypeScript with `ts-node/esm` Loader

A standalone project showing TypeScript source files transpiled on-the-fly with [`ts-node/esm`](ts-node/register`](https://typestrong.org/ts-node/docs/usage/#node-flags-and-other-tools) as a Node ECMAScript Modules loader.

```shell
npm i
npm run test
```

Note that the `tsconfig.json` file has `compilerOptions`:

- `"noEmit": true`: as there's no need to transpile `.ts` files on disk to `.js` files on disk before running these tests
- `"module": "ESNext`: indicating code should be transpiled in-memory as ESM

Additionally, `package.json` has `"type": "module"`.
If it didn't, TypeScript source files would need the `.mts` extension.

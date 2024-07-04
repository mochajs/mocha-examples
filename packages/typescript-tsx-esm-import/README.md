# TypeScript with `tsx` Loader

A standalone project showing TypeScript source files transpiled on-the-fly with [`--import tsx`](https://tsx.is/node) as a Node ECMAScript Modules importer.

```shell
npm i
npm run test
```

Note that the `tsconfig.json` file has `compilerOptions`:

- `"noEmit": true`: as there's no need to transpile `.ts` files on disk to `.js` files on disk before running these tests
- `"module": "ESNext`: indicating code should be transpiled in-memory as ESM

Additionally, `package.json` has `"type": "module"`.
If it didn't, TypeScript source files would need the `.mts` extension.

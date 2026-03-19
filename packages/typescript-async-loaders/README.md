## TypeScript and async custom loaders

Mocha 11.7.0 added support for Node's experimental [`require_module`](https://nodejs.org/docs/v22.20.0/api/modules.html#loading-ecmascript-modules-using-require) feature, which makes file loading a bit more complicated for Mocha 11. In this example, we showcase using ts-node **and** a custom asynchronous module loader to run a TypeScript test file.

This example shows more integrations than what most projects need. For a more straightforward example, see the [`typescript`](../typescript) sibling package.

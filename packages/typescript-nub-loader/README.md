# TypeScript with `@nubjs/loader`

This standalone project runs TypeScript tests with Mocha and the [`@nubjs/loader`](https://www.npmjs.com/package/@nubjs/loader) Node preload.

```shell
npm install
npm test
```

The test command type-checks the fixture, then starts Mocha with `--import=@nubjs/loader` and `--parallel`. The loader is pinned to `0.8.3`, and the example requires Node `18.19.0` or newer.

Mocha discovers TypeScript tests through `.mocharc.json`:

```json
{
  "extension": ["ts", "cts"],
  "spec": ["src/**/*.spec.ts", "src/**/*.spec.cts"]
}
```

The fixture covers both module formats:

- `message.spec.ts` imports an ES module through its emitted `.js` specifier.
- `legacy.spec.cts` loads a CommonJS `.cts` module with `require()`.

The loader changes TypeScript execution only. Mocha remains the test runner, including its configuration, assertions, and parallel execution.

# `require(ESM)` Example

A straightforward example of a CommonJS project that requires an ESM module.
Requires Node.js `^22.12.0 || >=23.0.0`.

1. `npm install`
2. `npm run test`

```plaintext
  example
    ✔ 2 + 2 === 4
    1) 2 + 2 === 5


  1 passing (3ms)
  1 failing

  1) example
       2 + 2 === 5:

      AssertionError: expected 4 to equal 5
      + expected - actual

      -4
      +5
      
      at Context.<anonymous> (test.spec.js:9:25)
      at process.processImmediate (node:internal/timers:511:21)
```
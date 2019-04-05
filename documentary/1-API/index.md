## API

The package publishes the `builtin-modules` folder with the source code of modules that will be mocked. It provides a simple function to get the path to the folder that contains `builtin-modules`.

```js
import nodejs from '@depack/nodejs'
```

%~%

```## getCorePath => string
[
  ["version?", "string"]
]
```

Returns the path to resolved `builtin-modules` within this package. Currently, only `v8` is supported and will be returned by default.

%EXAMPLE: example, ../src => @depack/nodejs%
<!-- %FORK example% -->
```
node_modules/@depack/nodejs/builtin-modules/v8
```

The process of generation of mocks consists of iterating though the list from `require('module').builtinModules`, requiring each of them and seeing what keys exist. They should align with the Node.JS externs generated using [`@depack/externs`](https://github.com/dpck/externs).

%~%

## Example

This is an example of generated mock for the `querystring` built-in Node.JS module:

%EXAMPLE: builtin-modules/v8/querystring%

%~%
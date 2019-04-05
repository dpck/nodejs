## API

The package publishes the `builtin-modules` folder with the source code of modules that will be mocked. It provides a simple function to get the path to the folder that contains `builtin-modules`.

```js
import nodejs from '@depack/nodejs'
```

%~%

```## getCorePath => string
[
  ["version?", "string"],
  ["exportAll?", "boolean"]
]
```

Returns the path to resolved `builtin-modules` within this package.

%EXAMPLE: example, ../src => @depack/nodejs%
<!-- %FORK example% -->
```
node_modules/@depack/nodejs/builtin-modules/v8
```

%~%

## Example

This is an example of generated mock for the `querystring` built-in Node.JS module:

%EXAMPLE: builtin-modules/v8/querystring%

%~%
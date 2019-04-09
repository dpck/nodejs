# @depack/nodejs

[![npm version](https://badge.fury.io/js/%40depack%2Fnodejs.svg)](https://npmjs.org/package/@depack/nodejs)

`@depack/nodejs` is Mocks Of Built-In Node.JS Modules To Use For Compilation. It is used in _Depack_ for compilation of Node.JS programs using _Google Closure Compiler_.

```sh
yarn add -E @depack/nodejs
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`getCorePath(version?: string): string`](#getcorepathversion-string-string)
- [Example](#example)
- [Ignored API](#ignored-api)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package publishes the `builtin-modules` folder with the source code of modules that will be mocked. It provides a simple function to get the path to the folder that contains `builtin-modules`.

```js
import nodejs from '@depack/nodejs'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `getCorePath(`<br/>&nbsp;&nbsp;`version?: string,`<br/>`): string`

Returns the path to resolved `builtin-modules` within this package. Currently, only `v8` is supported and will be returned by default.

```js
/* alanode example/ */
import nodejs from '@depack/nodejs'

const res = nodejs()
console.log(res)
```
```
node_modules/@depack/nodejs/builtin-modules/v8
```

The process of generation of mocks consists of iterating though the list from `require('module').builtinModules`, requiring each of them and seeing what keys exist. They should align with the Node.JS externs generated using [`@depack/externs`](https://github.com/dpck/externs).

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Example

This is an example of generated mock for the `querystring` built-in Node.JS module:

```js
export default querystring
export const {
  decode,
  encode,
  escape,
  parse,
  stringify,
  unescape,
  unescapeBuffer,
} = querystring
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/3.svg?sanitize=true"></a></p>

## Ignored API

Some imported modules will contain API properties which are not documented and will not form part of externs. They are ignored and should not be used if not documented. The full list is given below:

```js
export default {
  os: ['getNetworkInterfaces', 'tmpDir'],
}
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/4.svg?sanitize=true"></a></p>

## Copyright

<table>
  <tr>
    <th>
      <a href="https://artd.eco">
        <img src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png" alt="Art Deco" />
      </a>
    </th>
    <th>© <a href="https://artd.eco">Art Deco</a> for <a href="https://artd.eco/depack">Depack</a> 2019</th>
    <th>
      <a href="https://www.technation.sucks" title="Tech Nation Visa">
        <img src="https://raw.githubusercontent.com/artdecoweb/www.technation.sucks/master/anim.gif"
          alt="Tech Nation Visa" />
      </a>
    </th>
    <th><a href="https://www.technation.sucks">Tech Nation Visa Sucks</a></th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>
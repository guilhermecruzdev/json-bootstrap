# json-bootstrap

> Converts your JSON data into Bootstrap.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install json-bootstrap
```

Install with [yarn](https://yarnpkg.com):

```sh
$ yarn add json-bootstrap
```

## Usage

```js
const jsonBootstrap = require('json-bootstrap');
```

## Methods

### alert

Exposes a single dimension JSON array as Bootstrap Alerts.

**Example**

```js
const jsonBootstrap = require('json-bootstrap');

const errors = [
    'Your username must start with a letter',
    'Your username must have at least 2 characters.'
]

console.log(jsonBootstrap.alert(errors, 'danger'))
```

### card

Generates a Bootstrap Card.

### form

Build a Bootstrap Form from a JSON object with properties.

### table

Creates a Bootstrap Table from a JSON array of objects.

## About

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

Please read the [contributing guide](.github/contributing.md) for advice on opening issues, pull requests, and coding standards.

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```
### Author

**Guilherme Cruz**

* [github/guilhermecruzdev](https://github.com/guilhermecruzdev)
* [twitter/guilhermecruzdv](https://twitter.com/guilhermecruzdv)
* [website](https://guilhermecruzdev.com)

### License

Copyright © 2020, [Guilherme Cruz](https://guilhermecruzdev.com).
Released under the [MIT License](LICENSE).

***

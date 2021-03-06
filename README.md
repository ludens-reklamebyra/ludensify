# Ludensify

Utility helpers and functions to make developing fun and easy!

[![Build Status](https://travis-ci.org/ludens-reklamebyra/ludensify.svg?branch=master)](https://travis-ci.org/ludens-reklamebyra/ludensify)

### Current API

<small>Helper functions for simple checks</small>

- isArray
- isFunction
- isNumber
- isPlainObject
- isString
- isEmptyString
- isEmail
- isPhone
- checkNumberLength
- formatDate
- arrayMax

<small>DOM manipulation</small>

- `toggle({trigger, element, event, speed, complete})`

### Development

```
$ git clone https://github.com/ludens-reklamebyra/ludensify.git
$ cd ludensify
$ npm install (or yarn)
```

### npm scripts
Fire up webpack dev server on localhost:8080 with hot module reloading.
`$ npm run demo:watch`

Made changes to src-folder?
`$ npm run build`

Run jest tests with and without --watch
`$ npm test` or `npm test:watch`

### Formatter
No need to worry about code formatting in this repo. `prettier` will format
the code when commiting to github automatically.

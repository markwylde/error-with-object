# error-with-object
[![Build Status](https://travis-ci.org/markwylde/error-with-object.svg?branch=master)](https://travis-ci.org/markwylde/error-with-object)
[![David DM](https://david-dm.org/markwylde/error-with-object.svg)](https://david-dm.org/markwylde/error-with-object)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/markwylde/error-with-object)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/markwylde/error-with-object)](https://github.com/markwylde/error-with-object/releases)
[![GitHub](https://img.shields.io/github/license/markwylde/error-with-object)](https://github.com/markwylde/error-with-object/blob/master/LICENSE)

The inbuilt Error class but that accepts objects

## Example Usage
```javascript
const ErrorWithObject = require('error-with-object');
throw new ErrorWithObject({
  message: 'Something went wrong',
  code: 'SOMETHING_WENT_WRONG',
  anythingElse: 'no'
});
```

## License
This project is licensed under the terms of the MIT license.

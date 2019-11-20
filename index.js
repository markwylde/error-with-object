const { inspect } = require('util');

class ErrorObject extends Error {
  constructor (obj) {
    super(obj.message || inspect(obj));

    Object.assign(this, obj);
  }
}

module.exports = ErrorObject;

const test = require('tape');
const ErrorWithObject = require('../');

test('is instance of error', t => {
  t.plan(1);

  const error = new ErrorWithObject({});

  t.equal(error.constructor.constructor, Error.constructor);
});

test('can accept object', t => {
  t.plan(2);

  const error = new ErrorWithObject({ a: 1, b: 2 });

  t.equal(error.a, 1);
  t.equal(error.toString(), 'Error: {"a":1,"b":2}');
});

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
  t.equal(error.toString(), 'Error: { a: 1, b: 2 }');
});

test('can accept recursive object', t => {
  t.plan(2);

  const a = { b: 2 };
  a.a = a;
  const error = new ErrorWithObject(a);

  t.equal(error.b, 2);
  t.equal(error.toString(), 'Error: { b: 2, a: [Circular] }');
});

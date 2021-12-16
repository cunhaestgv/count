const doSomething = require('./main');

test('returns abc', () => {
  expect(doSomething()).toBe('foo');
});

const implementPowerFunction = require('./index.js');

test.skip('test #1',() => {
  expect(implementPowerFunction(2,3,3)).toEqual(2);
});

test.skip('test #2',() => {
  expect(implementPowerFunction(2,0,1)).toEqual(0);
});

test.skip('test #3',() => {
  expect(implementPowerFunction(2,0,10)).toEqual(1);
});

test.skip('test #4',() => {
  expect(implementPowerFunction(7,5,5)).toEqual(2);
});

test('test #5',() => {
  expect(implementPowerFunction(3,2,5)).toEqual(4);
});
const numbersOfLengthNAndValueLessThanK = require('./index.js');

test('numbersOfLengthNAndValueLessThanK function exists', () => {
  expect(typeof numbersOfLengthNAndValueLessThanK).toEqual('function');
});

describe('numbersOfLengthNAndValueLessThanK', () => {
  test('test #1', () => {
    expect(numbersOfLengthNAndValueLessThanK([0,1,5],2,210)).toEqual(6);
  });
  test('test #2', () => {
    expect(numbersOfLengthNAndValueLessThanK([0,1,2,3,4,5],2,21)).toEqual(7);
  });
});
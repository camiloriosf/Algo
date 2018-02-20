const maxNonNegativeSubArray = require('./index.js');

test('maxNonNegativeSubArray function exists', () => {
  expect(typeof maxNonNegativeSubArray).toEqual('function');
});

describe('maxNonNegativeSubArray', () => {
  test('test #1', () => {
    expect(maxNonNegativeSubArray([1, 2, 5, -7, 2, 3])).toEqual([1, 2, 5]);
  });
  test('test #2', () => {
    expect(maxNonNegativeSubArray([2, 3, -1, 3, 2, -1, 10])).toEqual([10]);
  });
});
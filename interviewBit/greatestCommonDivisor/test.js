const greatestCommonDivisor = require('./index.js');

test('greatestCommonDivisor function exists', () => {
  expect(typeof greatestCommonDivisor).toEqual('function');
});

describe('greatestCommonDivisor', () => {
  test('test #1', () => {
    expect(greatestCommonDivisor(6,9)).toEqual(3);
  });
  test('test #2', () => {
    expect(greatestCommonDivisor(17,23)).toEqual(1);
  });
  test('test #3', () => {
    expect(greatestCommonDivisor(100,2)).toEqual(2);
  });
  test('test #4', () => {
    expect(greatestCommonDivisor(2,1)).toEqual(1);
  });
  test('test #5', () => {
    expect(greatestCommonDivisor(1,1)).toEqual(1);
  });
  test('test #6', () => {
    expect(greatestCommonDivisor(0,1)).toEqual(1);
  });
  test('test #6', () => {
    expect(greatestCommonDivisor(286,247)).toEqual(13);
  });
});
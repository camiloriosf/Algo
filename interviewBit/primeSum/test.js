const primeSum = require('./index.js');

test('primeSum function exists', () => {
  expect(typeof primeSum).toEqual('function');
});

describe('primeSum', () => {
  test('test #1', () => {
    expect(primeSum(18)).toEqual([5,13]);
  });
  test('test #2', () => {
    expect(primeSum(4)).toEqual([2,2]);
  });
  test('test #3', () => {
    expect(primeSum(10)).toEqual([3,7]);
  });
  test('test #4', () => {
    expect(primeSum(194)).toEqual([3,191]);
  });
  test('test #5', () => {
    expect(primeSum(10)).toEqual([3,7]);
  });
  test('test #6', () => {
    expect(primeSum(160)).toEqual([3,157]);
  });
  test('test #7', () => {
    expect(primeSum(16777214)).toEqual([31,16777183]);
  });
});
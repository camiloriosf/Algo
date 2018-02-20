const palindromeInteger = require('./index.js');

test('palindromeInteger function exists', () => {
  expect(typeof palindromeInteger).toEqual('function');
});

describe('palindromeInteger', () => {
  test('test #1', () => {
    expect(palindromeInteger(101)).toEqual(1);
  });
  test('test #2', () => {
    expect(palindromeInteger(0)).toEqual(1);
  });
  test('test #3', () => {
    expect(palindromeInteger(10101)).toEqual(1);
  });
  test('test #4', () => {
    expect(palindromeInteger(100001)).toEqual(1);
  });
  test('test #5', () => {
    expect(palindromeInteger(1000010)).toEqual(0);
  });
  test('test #6', () => {
    expect(palindromeInteger(123)).toEqual(0);
  });
  test('test #7', () => {
    expect(palindromeInteger(123321)).toEqual(1);
  });
  test('test #8', () => {
    expect(palindromeInteger(1)).toEqual(1);
  });
});
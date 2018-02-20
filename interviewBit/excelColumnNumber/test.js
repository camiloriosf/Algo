const excelColumnNumber = require('./index.js');

test('excelColumnNumber function exists', () => {
  expect(typeof excelColumnNumber).toEqual('function');
});

describe('excelColumnNumber', () => {
  test('test #1', () => {
    expect(excelColumnNumber("AAA")).toEqual(703);
  });
  test('test #2', () => {
    expect(excelColumnNumber("BAA")).toEqual(1379);
  });
  test('test #3', () => {
    expect(excelColumnNumber("A")).toEqual(1);
  });
  test('test #4', () => {
    expect(excelColumnNumber("AB")).toEqual(28);
  });
});
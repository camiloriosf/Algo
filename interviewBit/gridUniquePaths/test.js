const gridUniquePaths = require('./index.js');

test('gridUniquePaths function exists', () => {
  expect(typeof gridUniquePaths).toEqual('function');
})

describe('gridUniquePaths', () => {
  test('test #1', () => {
    expect(gridUniquePaths(8,3)).toEqual(36);
  });
  test('test #2', () => {
    expect(gridUniquePaths(1,1)).toEqual(1);
  });
  test('test #3', () => {
    expect(gridUniquePaths(2,2)).toEqual(2);
  });
  test('test #4', () => {
    expect(gridUniquePaths(6,3)).toEqual(21);
  });
  test('test #5', () => {
    expect(gridUniquePaths(5,5)).toEqual(70);
  });
  test('test #6', () => {
    expect(gridUniquePaths(0,0)).toEqual(1);
  });
})
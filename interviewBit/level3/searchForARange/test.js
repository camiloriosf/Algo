const searchForARange = require('./index.js');

test('test #1', () => {
  expect(searchForARange([5, 7, 7, 8, 8, 10],8)).toEqual([3, 4]);
})

test('test #2', () => {
  expect(searchForARange([5, 7, 7, 8, 8, 10],6)).toEqual([-1, -1]);
})

test('test #3', () => {
  expect(searchForARange([5, 7, 7, 8, 8, 10],7)).toEqual([1, 2]);
})

test('test #4', () => {
  expect(searchForARange([5, 7, 7, 8, 8, 8, 8, 8, 10],8)).toEqual([3, 7]);
})

test('test #5', () => {
  expect(searchForARange([5],8)).toEqual([-1, -1]);
})

test('test #6', () => {
  expect(searchForARange([],8)).toEqual([-1, -1]);
})

test('test #7', () => {
  expect(searchForARange([1,2,3,8],8)).toEqual([3, 3]);
})

test('test #7', () => {
  expect(searchForARange([1,2,3,8],1)).toEqual([0, 0]);
})
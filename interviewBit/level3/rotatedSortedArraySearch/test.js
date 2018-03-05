const rotatedSortedArraySearch = require('./index.js');

test('test #1', () => {
  expect(rotatedSortedArraySearch([15,16,17,1,2,3], 16)).toEqual(1);
})

test('test #2', () => {
  expect(rotatedSortedArraySearch([], 16)).toEqual(-1);
})

test('test #3', () => {
  expect(rotatedSortedArraySearch([15], 15)).toEqual(0);
})

test('test #4', () => {
  expect(rotatedSortedArraySearch([15], 16)).toEqual(-1);
})

test('test #5', () => {
  expect(rotatedSortedArraySearch([15,16,17,18,19,20,21,22,23,1,2,3], 2)).toEqual(10);
})
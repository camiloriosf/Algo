const countElementOccurence = require('./index.js');

test('test #1', () => {
  expect(countElementOccurence([5, 7, 8, 8, 8,8,8, 10], 8)).toEqual(5);
});
test('test #2', () => {
  expect(countElementOccurence([5, 7, 7, 8, 8, 10], 8)).toEqual(2);
});
test('test #3', () => {
  expect(countElementOccurence([1], 8)).toEqual(0);
});
test('test #4', () => {
  expect(countElementOccurence([0], 8)).toEqual(0);
});
test('test #5', () => {
  expect(countElementOccurence([8], 8)).toEqual(1);
});
test('test #6', () => {
  expect(countElementOccurence([], 8)).toEqual(0);
});
test('test #7', () => {
  expect(countElementOccurence([1,8], 8)).toEqual(1);
});
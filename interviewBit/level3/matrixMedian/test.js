const matrixMedian = require('./index.js');

test('test #1', () => {
  expect(matrixMedian([[1,3,5],[2,6,9],[3,6,9]])).toEqual(5);
});
test('test #1', () => {
  expect(matrixMedian([[2,2,2],[2,2,2],[2,2,2]])).toEqual(2);
});
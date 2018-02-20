const minSteps = require('./index.js');

test('minSteps function exists', () => {
  expect(typeof minSteps).toEqual('function');
});

describe('Min Steps', () => {
  test('get min steps', () => {
    expect(minSteps([1, 2, 6], [1, 2, 6])).toEqual(5);
  });
  test('get min steps', () => {
    expect(minSteps([0, 1, 0, -1, -2], [0, 1, 2, 1, 1])).toEqual(4);
  });
  test('get min steps', () => {
    expect(minSteps([4, 8, -7, -5, -13, 9, -7, 8], [4, -15, -10, -3, -13, 12, 8, -8])).toEqual(108);
  });
});
const largestNumber = require('./index.js');

test('largestNumber function exists', () => {
  expect(typeof largestNumber).toEqual('function');
});

describe('largestNumber', () => {
  test('test #1', () => {
    expect(largestNumber([6,2,1])).toEqual("621");
  });
  test('test #2', () => {
    expect(largestNumber([3,30,34,5,9])).toEqual("9534330");
  });
  test('test #3', () => {
    expect(largestNumber([0,0,0])).toEqual("0");
  });
  test('test #4', () => {
    expect(largestNumber([0,0,0,1])).toEqual("1000");
  });
  test('test #5', () => {
    expect(largestNumber([0,0,0,0,0])).toEqual("0");
  });
  test('test #6', () => {
    expect(largestNumber([0,0,0,0,0,0])).toEqual("0");
  });
  test('test #7', () => {
    expect(largestNumber([472, 663, 964, 722, 485, 852, 635, 4, 368, 676, 319, 412])).toEqual("9648527226766636354854724412368319");
  });
});
const addOneToNumber = require('./index.js');

test('addOneToNumber function exists', () => {
  expect(typeof addOneToNumber).toEqual('function');
});

describe.skip('addOneToNumber', () => {
  test('test #1', () => {
    expect(addOneToNumber([1, 2, 3])).toEqual([1,2,4]);
  });
  test('test #2', () => {
    expect(addOneToNumber([0, 0, 1, 2, 3])).toEqual([1,2,4]);
  });
  test('test #3', () => {
    expect(addOneToNumber([1, 2, 3, 4, 5 , 9])).toEqual([1,2,3,4,6,0]);
  });
  test('test #4', () => {
    expect(addOneToNumber([0, 8, 8, 1, 7, 2, 1, 3, 5, 9 ])).toEqual([8, 8, 1, 7, 2, 1, 3, 6, 0 ]);
  });
  test('test #5', () => {
    expect(addOneToNumber([9,9,9,9,9 ])).toEqual([1,0,0,0,0,0 ]);
  });
  test('test #6', () => {
    expect(addOneToNumber([0, 1, 0, 0, 1, 2, 3])).toEqual([1,0,0,1,2,4]);
  });
});

describe('addOneToNumber', () => {
  test('test #5', () => {
    expect(addOneToNumber([0])).toEqual([1]);
  });
});
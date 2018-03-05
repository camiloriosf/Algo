const rotatedArray = require('./index.js');

test('test #1', () => {
  expect(rotatedArray([12,13,14,15,1,2])).toEqual(4);
});

test('test #2', () => {
  expect(rotatedArray([1,2,12,13,14,15,16])).toEqual(0);
});

test('test #3', () => {
  expect(rotatedArray([12,13,14,15,16,17,1,2,3,4,5,6,7,8,9,10,11])).toEqual(6);
});

test('test #4', () => {
  expect(rotatedArray([12,13,14,15,16,-1,0,1,2])).toEqual(5);
});

test('test #5', () => {
  expect(rotatedArray([])).toEqual(0);
});

test('test #6', () => {
  expect(rotatedArray([1])).toEqual(0);
});

test('test #7', () => {
  expect(rotatedArray([1,1])).toEqual(0);
});

test('test #8', () => {
  expect(rotatedArray([1,1,2])).toEqual(0);
});

test('test #9', () => {
  expect(rotatedArray([2,1,1,2])).toEqual(1);
})

test('test #10', () => {
  expect(rotatedArray([6,1,2,3,4,5])).toEqual(1);
})
test('test #11', () => {
  expect(rotatedArray([2,3,4,5,6,1])).toEqual(5);
})
test('test #12', () => {
  expect(rotatedArray([2,3,4,5,6,1,1])).toEqual(5);
})
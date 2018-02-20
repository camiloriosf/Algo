const waveArray = require('./index.js');

test('waveArray function exists', () => {
  expect(typeof waveArray).toEqual('function');
});

describe('waveArray', () => {
  test('get sorted array 1', () => {
    expect(waveArray([1, 2, 6])).toEqual([2,1,6]);
  });
  test('get sorted array 2', () => {
    expect(waveArray([1, 2, 3, 4])).toEqual([2,1,4,3]);
  });
  test('get sorted array 3', () => {
    expect(waveArray([1, 2, 2, 3, 4, 5])).toEqual([2,1,3,2,5,4]);
  });
  test('get sorted array 3', () => {
    expect(waveArray([1, 1 ,1 , 1, 1])).toEqual([1, 1, 1, 1, 1]);
  });
  test('get sorted array 3', () => {
    expect(waveArray([1, 1 ,1 , 1, 1, 2])).toEqual([1, 1, 1, 1, 2, 1]);
  }); //5, 1, 3, 2, 4
  test('get sorted array 3', () => {
    expect(waveArray([5, 1, 3, 2, 4])).toEqual([2, 1, 4, 3, 5]);
  });
});
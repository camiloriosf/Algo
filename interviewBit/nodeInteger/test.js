const nodeInteger = require('./index.js');

test('nodeInteger function exists', () => {
  expect(typeof nodeInteger).toEqual('function');
});

describe('nodeInteger', () => {
  test('get integer', () => {
    expect(nodeInteger([1, 2, 6])).toEqual(-1);
  });
  test('get integer', () => {
    expect(nodeInteger([1, 2, 6, 7])).toEqual(1); //1 5 7 5 2 3 4 8 9 2 
  });
  test('get integer', () => {
    expect(nodeInteger([1, 5, 7, 5, 2, 3, 4, 8, 9, 2 ])).toEqual(-1);
  });
});
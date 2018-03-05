const rearrangeArray = require('./index.js');

test('rearrangeArray is function', () => {
  expect(typeof rearrangeArray).toEqual('function');
});

describe('rearrangeArray', () => {
  test('test #1', () =>{
    expect(rearrangeArray([1,2,3,4,5,0])).toEqual([2,3,4,5,0,1]);
  })
})
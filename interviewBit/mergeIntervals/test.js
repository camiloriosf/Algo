const mergeIntervals = require('./index.js');

test('mergeIntervals function exists', () => {
  expect(typeof mergeIntervals).toEqual('function');
});


describe('mergeIntervals', () => {
  test('test #1', () => {
    expect(mergeIntervals([[1,2],[3,5],[6,7],[8,10],[12,16]],[4,9])).toEqual([[1,2],[3,10],[12,16]]);
  });
  test('test #2', () => {
    expect(mergeIntervals([[1,2],[3,5],[6,7],[8,10],[12,16]],[1,3])).toEqual([[1,5],[6,7],[8,10],[12,16]]);
  });
  test('test #2', () => {
    expect(mergeIntervals([[1,3],[6,9]],[2,5])).toEqual([[1,5],[6,9]]);
  });
});
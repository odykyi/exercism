import BubbleSort from './bubble-sort'

const assert = require('assert')

describe('bubbleSort sort()', () => {
  const bubbleSort = new BubbleSort();

  it('bubbleSort small arr', () => {
    const arr = [1,4,2,6,11,2];
    const sorted = bubbleSort.sort(arr);
    expect(sorted[0]).toBe(1);
    expect(sorted[1]).toBe(2);
    expect(sorted[2]).toBe(2);
    expect(sorted[3]).toBe(4);
    expect(sorted[4]).toBe(6);
    expect(sorted[5]).toBe(11);
  })
  it('bubbleSort big arr', () => {
    const arr = [1333, 11, 11, 11, 1121221, 2, 2, 22, 3, 33, 33333, 4, 44, 44, 55, 6, 66, 77, 88, 987];
    const sortedByNative = [...arr];
    const sortedByBubble = bubbleSort.sort(arr);
    sortedByNative.sort((a, b) => a - b);
    assert.deepStrictEqual(sortedByBubble, sortedByNative);
  })
});

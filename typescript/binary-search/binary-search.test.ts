import BinarySearch from './binary-search'

describe('BinarySearch find()', () => {
  const binarySearch = new BinarySearch();

  it('binarySearch', () => {
    // const arr = new Array(10).fill(1).map((_, i) => i + 10);
    const arr = [3,11,21,29,41,54,61,78,110,127];
    console.log('arr', arr);
    expect(binarySearch.find(arr, 29)).toBe(3);
  })
});

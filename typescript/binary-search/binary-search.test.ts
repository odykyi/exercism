import BinarySearch from './binary-search'

describe('BinarySearch find()', () => {
  const binarySearch = new BinarySearch();

  it('binarySearch', () => {
    const arr = new Array(10).fill(1).map((_, i) => i + 10);
    console.log('arr', arr);
    expect(binarySearch.find(arr, 13)).toBe(3);
  })
});

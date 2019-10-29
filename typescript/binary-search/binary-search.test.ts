import BinarySearch from './binary-search'
import ArmstrongNumbers from "../armstrong-numbers/armstrong-numbers";

describe('BinarySearch find()', () => {
  const binarySearch = new BinarySearch();

  it('binarySearch', () => {
    const arr = new Array(100).fill(1).map((_, i) => i + 1);
    console.log('arr', arr);
    expect(binarySearch.find(arr, 45)).toBe(44);
  })
});

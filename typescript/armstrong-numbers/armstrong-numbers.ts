export default {
  sum(arr: number[]): number {
    return arr.reduce((acc: number, curr: number) => acc + curr**arr.length, 0);
  },
  isArmstrongNumber(num: number): boolean {
    return num === this.sum(String(num).split('').map(Number));
  }
}
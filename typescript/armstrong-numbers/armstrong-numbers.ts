export default {
  sum(arr: number[]): number {
    return arr.reduce((acc: number, curr: number) => acc + curr**arr.length, 0);
  },
  isArmstrongNumber(num: number): boolean {
    const str: string = String(num);
    const arr = str.split('').map(Number);

    return num === this.sum(arr);
  }
}
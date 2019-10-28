export default class HansLuhn {
  getSum (multiply: number): number {
    return multiply >= 10 ? multiply - 9 : multiply
  }
  isValid(input: string): boolean {
    if (input.length < 13 || input.length > 16) {
      return false;
    }
    if (!['4', '5', '6'].includes(input[0]) && '37' != input[0] + input[1]) {
      return false;
    }

    let reversed = '';
    for (let i = input.length - 1; i >= 0; i--) {
      reversed += input[i];
    }

    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < reversed.length; i++) {
      if (i % 2 === 0) {
        // isEven
        evenSum += this.getSum(+reversed[i]);
      } else {
        // isOdd
        oddSum += this.getSum(+reversed[i] * 2);
      }
    }

    return ((evenSum + oddSum) % 10) === 0;
  }
}

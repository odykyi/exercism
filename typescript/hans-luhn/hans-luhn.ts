export default class HansLuhn {
  isValid(num: number): boolean {
    const input: string = num.toString();
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

    let summ = 0;

    for (let i = 0; i < reversed.length; i++) {
      if (i % 2 === 0) {
        // isEven
        summ += +reversed[i];
      } else {
        // isOdd
        const multiply = +reversed[i] * 2;
        summ += multiply >= 10 ? multiply - 9 : multiply;
      }
    }

    return (summ % 10) === 0;
  }
}

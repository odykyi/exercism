import HansLuhn from './hans-luhn'

describe('hansLuhn isValid()', () => {
  const hansLuhn = new HansLuhn();
  const getInputFromLength = (l: number) => new Array(l).fill(1).join('');

  it('hansLuhn test getSum method', () => {
    expect(hansLuhn.getSum(0)).toBe(0);
    expect(hansLuhn.getSum(11)).toBe(2);
    expect(hansLuhn.getSum(15)).toBe(6);
    expect(hansLuhn.getSum(2)).toBe(2);
    expect(hansLuhn.getSum(1)).toBe(1);
    expect(hansLuhn.getSum(9)).toBe(9);
    expect(hansLuhn.getSum(18)).toBe(9);
    expect(hansLuhn.getSum(17)).toBe(8);
  })
  it('hansLuhn length 12 incorrect', () => {
    const l12 = getInputFromLength(12);
    expect(hansLuhn.isValid(l12)).toBeFalsy()
  })
  it('hansLuhn length 17 incorrect', () => {
    const l17 = getInputFromLength(17);
    expect(hansLuhn.isValid(l17)).toBeFalsy()
  })

  it('hansLuhn starts from 1 incorrect', () => {
    const l13 = '1323856478324';
    expect(hansLuhn.isValid(l13)).toBeFalsy()
  })

  it('hansLuhn Visa card correct 1', () => {
    const l16 = '4012888888881881';
    expect(hansLuhn.isValid(l16)).toBeTruthy()
  })
  it('hansLuhn Visa card correct 2', () => {
    const l16 = '4556931555500632';
    expect(hansLuhn.isValid(l16)).toBeTruthy()
  })
  it('hansLuhn Visa sample card correct', () => {
    const l16 = '4111111111111111';
    expect(hansLuhn.isValid(l16)).toBeTruthy()
  })
  it('hansLuhn Mastercard correct', () => {
    const l16 = '5529130754002679';
    expect(hansLuhn.isValid(l16)).toBeTruthy()
  })
  it('hansLuhn Mastercard zero correct', () => {
    const l16 = '5500000000000004';
    expect(hansLuhn.isValid(l16)).toBeTruthy()
  })
  it('hansLuhn American Express card 1 correct', () => {
    const l15 = '378282246310005';
    expect(hansLuhn.isValid(l15)).toBeTruthy()
  })
  it('hansLuhn American Express card 2 correct', () => {
    const l15 = '371449635398431';
    expect(hansLuhn.isValid(l15)).toBeTruthy()
  })
  it('hansLuhn American Express card 3 correct', () => {
    const l15 = '371238839571772';
    expect(hansLuhn.isValid(l15)).toBeTruthy()
  })
  it('hansLuhn Discover cards correct', () => {
    const l16 = '6011000000000004';
    expect(hansLuhn.isValid(l16)).toBeTruthy()
  })

  it('hansLuhn test Visa invalid card 4388576018402626', () => {
    const l13 = '4388576018402626';
    expect(hansLuhn.isValid(l13)).toBeFalsy()
  })


  it('hansLuhn test Visa valid card 4388576018410707', () => {
    const l13 = '4388576018410707';
    expect(hansLuhn.isValid(l13)).toBeTruthy()
  })

});

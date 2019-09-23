function isLeapYear(year: number): boolean {
  // Your code here
  if (year % 4 != 0 || year % 100 == 0 && year % 400 != 0) return false;
  return true;
}

export default isLeapYear
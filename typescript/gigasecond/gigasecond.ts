export default class Gigasecond {
  private readonly inputDate = new Date();

  constructor(inputDate: Date) {
    this.inputDate = inputDate
  }

  date(): Date {
    return this.inputDate;
  }
}
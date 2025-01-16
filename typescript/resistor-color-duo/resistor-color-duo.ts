const colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'] as const;
export type Color = typeof colors[number];

export class ResistorColor {
  private _colors: Color[];

  constructor(_colors: Color[]) {
    if (_colors.length < 2) {
      throw new Error('At least two colors need to be present');
    }
    this._colors = _colors;
  }

  getColor = (index: number): string => {
    return String(colors.indexOf(this._colors[index]));
  };

  value = (): number => {
    const [first, second] = [this.getColor(0), this.getColor(1)];
    return +(first + second)
  };
}

export class ResistorColor {
  private colors: string[];
  private colorSet: string[] = ['black', 'brown' ,'red' , 'orange' , 'yellow' , 'green' , 'blue' , 'violet' , 'grey' , 'white'];

  constructor(colors: string[]) {
    if (colors.length < 2) {
      throw new Error('At least two colors need to be present');
    }
    this.colors = colors;
  }

  getColorValue = (index: number) : string => {
    return String(this.colorSet.indexOf(this.colors[index]));
  };

  value = (): number => {
    return +(this.getColorValue(0) + this.getColorValue(1))
  };
}

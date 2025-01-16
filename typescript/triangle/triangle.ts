export default class Triangle {

    sides: number[];

    constructor(...sides: number[]) {
        this.sides = sides;
    }

    kind() {
        const [a, b, c] = this.sides;
        if (!a && !b && !c) {
            throw new Error('error')
        }
        if (((a + b) < c) || ((b + c) < a)) {
            throw new Error('error')
        }
        if (a === b && a === c) {
           return 'equilateral'
        }
        if (a === b || a === c || b === c) {
           return 'isosceles'
        }
        return 'scalene';
    }
}
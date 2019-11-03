export default class BubbleSort {
  sort(array: number[]): number[] {
     for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < i; j++) {
        if (array[i] < array[j]) {
          const tmp = array[i];
          array[i] = array[j];
          array[j] = tmp;
        }
      }
    }

    return array;
  }
}

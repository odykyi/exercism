export default class BinarySearch {
  find(array: number[], input: number): number | null {
    let res = null;
    for (let i = 0; i < array.length; i++){
      if((array[i] + array[array.length - 1 + i]) / 2 > input) {
        console.log('big')
      }
      else if((array[i] + array[array.length - 1 + i]) / 2 < input) {
        console.log('small')
      } else if (array[i] === input){
        res = i;
        break;
      }

      console.log('iteration', i)
    }
    return res;

  }
}

export default class BinarySearch {
  find(array: number[], input: number): number | null {
    let res = null;
    let lim = array.length - 1;

    for (let i = 0; i < lim;) {
      const firstIndex = i;
      const lastIndex = array.length - 1 - i;
      const firstElement = array[firstIndex];
      if (!firstElement) {
        break
      }
      const lastElement = array[lastIndex];
      console.log('------start---------');
      console.log(`firstIndex ${firstIndex}, lastIndex ${lastIndex}, firstElement ${firstElement}, lastElement ${lastElement}`);

      const guessIndex = Math.floor((firstIndex + lastIndex) / 2);
      console.log(`guessIndex ${guessIndex}, array[guessIndex] ${array[guessIndex]}, lim ${lim}, i ${i}`);

      if (array[guessIndex] > input) {
        console.log('big then input');
        lim = guessIndex;
        i++;
      }
      else if (array[guessIndex] < input) {
        console.log('+++++++++++');
        console.log('smaller then input');
        lim = lim / 2;
      } else {
        console.log('FIND!', i)
        res = i;
        break;
      }
    }

    return res;
  }
}

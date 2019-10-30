export default class BinarySearch {
  find(array: number[], input: number): number | null {
    let res = null;
    let lim = array.length - 1;
    let counter = 0;
    let mid = Math.floor(lim / 2);

    for (let i = 0; i < lim;) {
      counter++
      if (counter === 11) throw new Error('STOP!');
      if (array[mid] > input) {
        console.log('BIG then input');
        lim = mid;
        i = Math.floor(mid / 4);
        mid = Math.floor(mid / 2);

        console.log('lim', lim);
        console.log('i', i);
        console.log('mid', mid);
        continue
      }
      else if (array[mid] < input) {
        console.log('SMALL then input');
        console.log('lim', lim);
        console.log('i', i);
        console.log('mid', mid);
        mid = Math.floor(mid * 2);
        // lim = lim / 2;
        continue
      } else {
        console.log('FIND!', i)
        res = i;
        continue;
      }

    }

    return res;
  }
}

// const firstElement = array[firstIndex];
// if (!firstElement) {
//   break
// }
// const lastElement = array[lastIndex];
// console.log('------start---------');
// console.log(`firstIndex ${firstIndex}, lastIndex ${lastIndex}, firstElement ${firstElement}, lastElement ${lastElement}`);
//
// const guessIndex = Math.floor((firstIndex + lastIndex) / 2);
// console.log(`guessIndex ${guessIndex}, array[guessIndex] ${array[guessIndex]}, lim ${lim}, i ${i}`);
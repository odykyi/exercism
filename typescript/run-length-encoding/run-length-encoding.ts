export default {
  objectToString(obj: any) {
    const arr: any[] = [];
    Object.values(obj).forEach((el, index) => {
      if (el != 1) arr.push(el);
      arr.push(Object.keys(obj)[index]);
    });
    return arr.join('');
  },
  encode(str: string): string {
    if (!str) return '';
    const arr = str.split('');
    let stack: any[] = [];
    const obj: any = {};
    arr.forEach((word, index) => {
      if (stack[index] === word || stack[index - 1] === word) {
        obj[word] = obj[word] ? obj[word] + 1 : 2;
        stack = [];
      } else {
        obj[word] = obj[word] ? obj[word] + 1 : 1;
        stack[index] = word;
      }
    });


    console.log('obj', obj);
    console.log('stack', stack);
    return this.objectToString(obj);
  },
  // decode(str: string): string {
  //   return '';
  // }
}

// export default {
//   encode(str: string): string {
//     if (!str) return '';
//     const arr = str.split('');
//     let stack: any[] = [];
//     const obj: any = {};
//     arr.forEach((word, index) => {
//       if (stack[index] === word  || stack[index - 1] === word) {
//         obj[word] = obj[word] ? obj[word] + 1 : 2;
//         stack = [];
//       } else {
//         stack[index] = word;
//       }
//     });
//     console.log('obj', obj);
//     console.log('stack', stack);
//     return stack.join();
//   },
//   // decode(str: string): string {
//   //   return '';
//   // }
// }
export default {
  encode(code: string): string {
    if (!code) return '';
    let encode = '';

    for (let i = 0; i < code.length; i++) {
      let count = 1;
      for (let j = i; j < code.length; j++) {
        if (code[i] !== code[j+1]) break;
        count++;
        i++;
      }
      encode += count === 1 ? code[i] : count + code[i];
    }

    return encode
  },
  // "2A3B4C"
  // "AABBBCCCC"
  decode(code: string): string {
    let decode = '';
    console.log('code', code);

    for (let i = 0; i < code.length; i++) {
      let count = Number.isInteger(+code[i]) ? +code[i] : 1;
      let char = !Number.isInteger(+code[i]) ? code[i] : '';
      console.log('count', count);

      for (let j = 0; j < count; j++) {
        // console.log('----code[i]', code[i]);
        // console.log('----code[j]', code[j]);
        console.log('----char', char);

        decode += char;
      }
    }
    console.log('----');
    console.log('decode', decode);
    // decode =
    return decode;
  }

//   encode(code: string): string {
//     if (!code) return '';
//     let encode = '';
//
//     for (let i = 0; i < code.length; i++) {
//       let count = 1;
//       for (let j = i; j < code.length; j++) {
//         if (code[i] !== code[j+1]) break;
//         count++;
//         i++;
//       }
//       encode += count === 1 ? code[i] : count + code[i];
//     }
//
//     return encode
//   },
// }
}

//
// export default {
//   encode(code: string): string {
//     if (!code) return '';
//     let encode = '';
//
//     for (let i = 0; i < code.length; i++){
//       const smb = code[i] ;
//       let count = 1;
//       for (let j = i; j < code.length; j++){
//         if (code[j + 1] != smb) break ;
//         count++ ;
//         i++ ;
//       }
//
//       if (count === 1) {
//         encode += smb ;
//       } else {
//         encode += count + smb ;
//       }
//     }
//     return encode
//   },
// }


//
// export default {
//   objectToString(obj: any) {
//     const arr: any[] = [];
//     Object.values(obj).forEach((el, index) => {
//       if (el != 1) arr.push(el);
//       arr.push(Object.keys(obj)[index]);
//     });
//     return arr.join('');
//   },
//   encode(str: string): string {
//     if (!str) return '';
//     const arr = str.split('');
//     let stack: any[] = [];
//     const obj: any = {};
//     arr.forEach((word, index) => {
//       if (stack[index] === word || stack[index - 1] === word) {
//         if (arr[index + 1] !== word) {
//           delete obj[word]
//         }
//         obj[word] = obj[word] ? obj[word] + 1 : 2;
//         stack = [];
//       } else {
//         obj[word] = obj[word] ? obj[word] + 1 : 1;
//         stack[index] = word;
//       }
//     });
//
//
//     console.log('obj', obj);
//     console.log('stack', stack);
//     return this.objectToString(obj);
//   },
//   // decode(str: string): string {
//   //   return '';
//   // }
// }

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
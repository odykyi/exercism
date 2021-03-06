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
  decode(code: string): string {
    let decode = '';
    for (let i = 0; i < code.length; i++) {
      let num = 1;

      if (code[i] >= '0' && code[i] <='9') {
        num = 0;
        while (code[i] >= '0' && code[i] <='9') {
          num = num * 10 + Number(code[i]);
          ++i;
        }
      }
      for (let j = 0; j < num; j++) {
        decode += code[i];
      }
    }

    return decode;
  }

}

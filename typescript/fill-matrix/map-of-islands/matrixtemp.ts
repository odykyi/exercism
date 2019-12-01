// [
//   [1, 1, 0, 0, 0, 0, 0], // 7
//   [0, 1, 0, 1, 0, 0, 0], // 7
//   [1, 1, 0, 1, 1, 0, 0], // 7
//   [1, 0, 0, 0, 1, 0, 0], // 7
//   [0, 0, 0, 1, 1, 1, 0], // 7
//   [1, 1, 1, 0, 0, 1, 0], // 7
// ]

// top:    [i - 1, j],
// right:  [i,     j + 1],
// bottom: [i + 1, j],
// left:   [i,     j-1]
// @ts-ignore:disable-next-line

// const validNeighbours = Object.keys(neighbours)
//   .filter((key: string) => !!neighbours[key])
//   .reduce((res: any, key) => (res[key] = neighbours[key], res), {} );
//
// return validNeighbours;

interface El {
  i: number;
  j: number;
}

interface Neighbour {
  top: El;
  right: El;
  bottom: El;
  left: El;
}

function getNeighbours(i: number, j: number): Neighbour {
  const top =    { name: 'top',    i: i - 1, j };
  const right =  { name: 'right',  i,        j: j + 1 };
  const bottom = { name: 'bottom', i: i + 1, j };
  const left =   { name: 'left',   i,        j: j - 1 };

  return {
    top,
    right,
    bottom,
    left
  }
}

function isValid(map: any, vertex: any): any {
  return vertex.i >= 0
    && vertex.j >= 0
    && map[vertex.i]
    && map[vertex.i][vertex.j]
    && { [vertex.name]: { i: vertex.i, j: vertex.j}}
}

function getValidNeighbours(map: number[][], neighbours: Neighbour): any {
  const {
    top,
    right,
    bottom,
    left
  } = neighbours;

  return {
    ...(isValid(map, top)),
    ...(isValid(map, right)),
    ...(isValid(map, bottom)),
    ...(isValid(map, left))
  };
}

function matrix(map: number[][]): number {
  // const islands: any = {};
  let counterOfIslands = 0;
  const fullList: any[] = [];

  for (let i = 0; i < map.length;) {
    for (let j = 0; j < map[i].length;) {
      if (map[i][j] === 1) {
        const center = { i, j };
        const neighbours = getNeighbours(i, j);
        const validNeighbours: any = getValidNeighbours(map, neighbours) || {};

        const { top, right, bottom, left }: Neighbour = validNeighbours;
        if (!Object.keys(fullList).length) {
          fullList.push(center);
          top && fullList.push(top);
          right && fullList.push(right);
          bottom && fullList.push(bottom);
          left && fullList.push(left);
        } else {
          top && !fullList.find((is: any) => is.i === top.i && is.j === top.j) && fullList.push(top);
          right && !fullList.find((is: any) => is.i === right.i && is.j === right.j) && fullList.push(right);
          bottom && !fullList.find((is: any) => is && is.i === bottom.i && is.j === bottom.j) && fullList.push(bottom);
          left && !fullList.find((is: any) => is.i === left.i && is.j === left.j) && fullList.push(left);
        }
        // counterOfIslands++;
      }

      j++;
    }
    i++;
  }
  fullList.sort(function (a, b) {
    return a.i - b.i || a.j - b.j;
  });

  const res = fullList.reduce((acc: any, element: any, index: any) => {
    if (+index === 0) {
      acc[counterOfIslands] = [element];
      return acc
    }
    console.log('element', element)

    Object.keys(acc).forEach(k => {
      const ac = acc[+k];
      console.log('KKKKKKK', +k);
      console.log('Object.keys(acc)', Object.keys(acc).length);
      console.log('acc', acc);
      console.log('ac.length', ac.length);
      const found = ac.find((a: any) => {
        const sumA = a && (a.i + a.j);
        const sumE = element && (element.i + element.j);

        const isOk =
          ((a.i - element.i >= 0 && a.i - element.i <= 1) &&
           (a.j - element.j >= 0 && a.j - element.j <= 1)) ||

          ((element.i - a.i >= 0 && element.i - a.i <= 1) &&
           (element.j - a.j >= 0 && element.j - a.j <= 1));

        return isOk;

      });// END find

      if (found) {
        ac.push(element);

      } else {
        if (+k === 40) {
          throw new Error('40!!!')
        }
        // counterOfIslands++;
        acc[+k+1] = [element];
      }
      // 1 { i: 1, j: 3 },
      // next { i: 2, j: 0 },
      // console.log('ac', ac);
      // console.log('------found', found)

    });// END forEach


    return acc;
  }, {});
  console.log('counterOfIslands', counterOfIslands);
  // console.log('fullList', fullList);
  console.log('0000000000fullList', fullList);
  console.log('+++++++++res', res);


  return 2.66667;
}

export default matrix;

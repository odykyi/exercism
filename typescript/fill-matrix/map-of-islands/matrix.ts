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
//
// interface El {
//   i: number;
//   j: number;
// }

// interface Neighbour {
//   top: El;
//   right: El;
//   bottom: El;
//   left: El;
// }

// function getNeighbours(i: number, j: number): Neighbour {
//   const top =    { name: 'top',    i: i - 1, j };
//   const right =  { name: 'right',  i,        j: j + 1 };
//   const bottom = { name: 'bottom', i: i + 1, j };
//   const left =   { name: 'left',   i,        j: j - 1 };
//
//   return {
//     top,
//     right,
//     bottom,
//     left
//   }
// }
//
// function isValid(map: any, vertex: any): any {
//   return vertex.i >= 0
//     && vertex.j >= 0
//     && map[vertex.i]
//     && map[vertex.i][vertex.j]
//     && { [vertex.name]: { i: vertex.i, j: vertex.j}}
// }
//
// function getValidNeighbours(map: number[][], neighbours: Neighbour): any {
//   const {
//     top,
//     right,
//     bottom,
//     left
//   } = neighbours;
//
//   return {
//     ...(isValid(map, top)),
//     ...(isValid(map, right)),
//     ...(isValid(map, bottom)),
//     ...(isValid(map, left))
//   };
// }

// fullList [
//   { i: 5, j: 5 },
//   { i: 5, j: 2 },
//   { i: 5, j: 1 },
//   { i: 5, j: 0 },
//   { i: 4, j: 5 },
//   { i: 4, j: 4 },
//   { i: 4, j: 3 },
//   { i: 3, j: 4 },
//   { i: 3, j: 0 },
//   { i: 2, j: 4 },
//   { i: 2, j: 3 },
//   { i: 2, j: 1 },
//   { i: 2, j: 0 },
//   { i: 1, j: 3 },
//   { i: 1, j: 1 },
//   { i: 0, j: 1 },
//   { i: 0, j: 0 }
// ]
function matrix(map: number[][]): number {
  const islands: any = {};
  // const counterOfIslands = 0;
  let counterOfIslands = 0;
  const fullList: any[] = [];
  const Head = 0;

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      islands[counterOfIslands] = islands[counterOfIslands] || [];

      // if (i === 2 && j === 2) throw new Error('END!!')
      if (map[i][j] === 1 && i === 0 && j === 0) {
        islands[counterOfIslands].unshift({ i, j });
        continue;
      }
      if (map[i][j] !== 1) { continue }
      else { fullList.push({ i, j }); }

      if (!islands[counterOfIslands].length) {
        islands[counterOfIslands].unshift({ i, j });
      }
      const head = islands[counterOfIslands][Head];
      console.log('  islands[counterOfIslands]', islands[counterOfIslands])
      console.log('  head', head)

      const iMinus = i - 1; const iPlus = i + 1; const noti = head.i !== i;
      const jMinus = i - 1; const jPlus = j + 1; const notj = head.j !== j;
      const notiMinus = head.i !== iMinus;       const notiPlus = head.i !== iPlus;
      const notjMinus = head.j !== jMinus;       const notjPlus = head.j !== jPlus;

      const top = (map[iMinus] && map[iMinus][j]);
      const right = map[i][j + 1];
      const bottom = (map[i + 1] && map[i + 1][j]);
      const left = map[i][j - 1];
      const isHaveChildren = top || right || bottom || left;
      const isDiffOk = (head: any, i: any, j: any): boolean => {
        return ((head.i - i === 0 || head.i - i === 1) && (head.j - j === 0 || head.j - j === 1) )
            || ((i - head.i === 0 || i - head.i === 1) && (j - head.j === 0 || j - head.j === 1))
      };

      if (isDiffOk(head, i, j)) {
        islands[counterOfIslands].unshift({ i, j });
      } else {
        continue
      }

      if (isHaveChildren) {
        // const isTop = top === 1;// && notiMinus && notj;
        // const isRight = right === 1;// && noti && notjPlus;
        // const isBottom = bottom === 1;// && notiPlus && notj;
        // const isLeft = left === 1;// && noti && notjMinus;
        const isTop = top === 1;// && notiMinus && notj;
        const isRight = right === 1;// && noti && notjPlus;
        const isBottom = bottom === 1;// && notiPlus && notj;
        const isLeft = left === 1;// && noti && notjMinus;
        const listOfNeighbours = [];
        if (isTop && isDiffOk(head, i - 1, j)) {
          listOfNeighbours.unshift({ i: i - 1, j });
          // islands[counterOfIslands].unshift();
        }
        if (isRight && isDiffOk(head, i, j + 1)) {
          listOfNeighbours.unshift({ i, j: j + 1 });
          // islands[counterOfIslands].unshift({ i, j: j + 1 });
        }
        if (isBottom && isDiffOk(head, i + 1, j)) {
          listOfNeighbours.unshift({ i: i + 1, j });
          // islands[counterOfIslands].unshift({ i: i + 1, j });
        }
        if (isLeft && isDiffOk(head, i, j - 1)) {
          listOfNeighbours.unshift({ i, j: j - 1 });
          // islands[counterOfIslands].unshift({ i, j: j - 1 });
        }
        if (i === 1 && j === 1) {
          console.log('##############listOfNeighbours', listOfNeighbours)
        }

        islands[counterOfIslands].unshift(...listOfNeighbours);


        if (!isTop && !isRight && !isBottom && !isLeft) {
          counterOfIslands++;
          if (counterOfIslands === 40){
            console.log('333islands', islands)
            throw new Error('1!!!!err full')
          }
          // i = 0;
          // j = 0;
          // console.log('NORRR !isTop && !isRight && !isBottom && !isLeft', !isTop && !isRight && !isBottom && !isLeft)
        }
        // else {
        //   console.log('88Not found T R L B, this', i, j);
        // }
      } else {
        // console.log('-isHaveChildren00Not found chid, this', i, j);
      }
    }
  }

  const res = {};

  console.log('counterOfIslands', counterOfIslands);
  console.log('0000000000fullList', fullList);
  console.log('+++++++++res', res);
  console.log('222222222islands', islands);


  return 2.66667;
}

export default matrix;

// const foundIa = head.i - i >= 0 && head.i - i <= 1;
// const foundJa = head.j - j >= 0 && head.j - j <= 1;
// const foundIb = i - head.i >= 0 && i - head.i <= 1;
// const foundJb = j - head.j >= 0 && j - head.j <= 1;

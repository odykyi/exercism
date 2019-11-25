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
function getNeighbours(map: number[][], i: number, j: number) {
  const neighbours: any = {
    // @ts-ignore:disable-next-line
    top: map[i - 1] && map[i - 1][j],
    // @ts-ignore:disable-next-line
    right: map[i][j + 1],
    // @ts-ignore:disable-next-line
    bottom: map[i + 1] && map[i + 1][j],
    // @ts-ignore:disable-next-line
    left: map[i][j - 1]
  };

  const validNeighbours = Object.keys(neighbours).filter((key: string) => !!neighbours[key]);

  return validNeighbours;

}
function matrix(map: number[][]): number {
  const islands: any = {};
  let counterOfIslands = 0;
  const excludeList: string[] = [];

  for (let i = 0; i < map.length;) {
    for (let j = 0; j < map[i].length;) {
      const str = `${i}${j}`;
      if (excludeList.includes(str)) {
        j++;
        continue
      }
      if (map[i][j] === 1) {
        excludeList.push(str);
        const validNeighbours = getNeighbours(map, i, j);

        console.log('validNeighbours',  i, j, validNeighbours);
        islands[counterOfIslands] = islands[counterOfIslands] || [];
        islands[counterOfIslands].push([i, j])

      } else {
        // console.log('1111')
        counterOfIslands++;
      }

      j++;
    }
    i++;
  }
  console.log('islands', islands)
  console.log('counterOfIslands', counterOfIslands)
  console.log('excludeList', excludeList)


  return 2.66667;
}

export default matrix;

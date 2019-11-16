function matrix(n: number): string[][] {
  const matrix = Array(n).fill('o')
    .map(() => Array(n).fill('o'));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j === 2 || (i + 6 <= j)) {
        matrix[i][j] = 'x'
      }
    }
  }

  // console.log('matrix', matrix);

  return matrix;
}

export default matrix;

function matrix(n: number): string[][] {
  const matrix = Array(n).fill('o')
    .map(() => Array(n).fill('o'));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if ((j < n/2 && i+1 > n/2) || (n/2 < j+1 && n/2 > i)) {
        matrix[i][j] = 'x'
      }
    }
  }

  return matrix;
}

export default matrix;

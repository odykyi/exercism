function matrix(n) {
  const matrix = Array(n).fill('o')
    .map(() => Array(n).fill('o'));

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (j === 2 || (i + 6 <= j)) {
        matrix[i][j] = 'x'
      }
    }
  }
  console.log('matrix', matrix)
}

matrix(10);

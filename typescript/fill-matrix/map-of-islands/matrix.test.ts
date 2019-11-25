import matrix from './matrix'

const assert = require('assert');

describe('test matrix', () => {
  it('matrix generates correct square arrays', () => {
    // 7 6

    const matrixToCompare = [
      [1, 1, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0, 0, 0],
      [1, 1, 0, 1, 1, 0, 0],
      [1, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 1, 1, 0],
      [1, 1, 1, 0, 0, 1, 0],
    ];

    assert.deepEqual(matrix(matrixToCompare), 2.66667);
  })
});

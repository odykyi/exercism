import matrix from './matrix'

const assert = require('assert');

describe('test matrix', () => {
  it('matrix generates correct arrays', () => {
    const result = matrix(10);

    const matrixToCompare = [
      [ 'o', 'o', 'x', 'o', 'o', 'o', 'x', 'x', 'x', 'x' ],
      [ 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'x', 'x', 'x' ],
      [ 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'x', 'x' ],
      [ 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'x' ],
      [ 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o' ],
      [ 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o' ],
      [ 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o' ],
      [ 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o' ],
      [ 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o' ],
      [ 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o' ]
    ];

    assert.deepEqual(result, matrixToCompare);
  })
});

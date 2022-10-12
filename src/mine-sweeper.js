const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let resultMatrix = [];
  for (let rows = 0; rows < matrix.length; rows++) {
    let row = [];
    for (let cols = 0; cols < matrix[rows].length; cols++) {
      let current = 0;
      for (let r = -1; r < 2; r ++) {
        for (let c = -1; c < 2; c++) {
          if (r !== 0 || c !== 0) {
            if ( (rows + r) >= 0 && (rows + r) <= matrix.length - 1 
                && (cols + c) >= 0 && (cols + c) <= matrix[rows].length -1) 
              {
                current += Number(matrix[rows+r][cols+c]);
            }
          }
        }
      }
      row.push(current);
    }
    resultMatrix.push(row);
  }
  return resultMatrix;
}

module.exports = {
  minesweeper
};

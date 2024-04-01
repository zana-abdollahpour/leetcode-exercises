// function uniquePaths(m: number, n: number) {
//   const dpMatrix: Array<number[]> = [];
//   for (let row = 1; row <= n; row++) {
//     dpMatrix.push([]);
//   }

//   // fill out the first row of dpMatrix
//   for (let row = 0; row < n; row++) {
//     dpMatrix[row][0] = 1;
//   }
//   // fill out the first col of dpMatrix
//   for (let col = 0; col < m; col++) {
//     dpMatrix[0][col] = 1;
//   }

//   for (let row = 1; row < n; row++) {
//     for (let col = 1; col < m; col++) {
//       dpMatrix[row][col] = dpMatrix[row][col - 1] + dpMatrix[row - 1][col];
//     }
//   }

//   return dpMatrix[dpMatrix.length - 1][m - 1];
// }

function uniquePaths(m: number, n: number) {}

module.exports = uniquePaths;

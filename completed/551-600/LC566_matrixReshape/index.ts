// function matrixReshape(mat: number[][], r: number, c: number): number[][] {
//   if (r * c !== mat.length * mat[0].length) return mat;

//   const items = mat.flatMap((x) => x);

//   const result: number[][] = [];
//   for (let i = 0; i < r; i++) {
//     const row = items.slice(i * c, i * c + c);
//     result.push(row);
//   }

//   return result;
// }

function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  if (r * c !== mat.length * mat[0].length) return mat;

  const result: number[][] = Array.from({ length: r }, () => []);

  let numPushed = 0;
  let curRow = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (numPushed >= c) {
        numPushed = 0;
        curRow++;
      }
      result[curRow].push(mat[i][j]);
      numPushed++;
    }
  }

  return result;
}

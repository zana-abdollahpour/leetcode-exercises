function generate(numRows: number): number[][] {
  let pascalTriangle = [[1]];

  for (let i = 1; i < numRows; i++) {
    const currentRow = [1];
    for (let j = 1; j < i; j++)
      currentRow.push(pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j]);
    currentRow.push(1);
    pascalTriangle.push(currentRow);
  }

  return pascalTriangle;
}

console.log(generate(5));

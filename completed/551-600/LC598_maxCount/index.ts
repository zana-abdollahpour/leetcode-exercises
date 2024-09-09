function maxCount(m: number, n: number, ops: number[][]): number {
  let minRow = m;
  let minColumn = n;

  ops.forEach((operation) => {
    minRow = Math.min(minRow, operation[0]);
    minColumn = Math.min(minColumn, operation[1]);
  });

  return minRow * minColumn;
}

function numIslands(grid: string[][]): number {
  let count = 0;

  function dfs(grid: string[][], row: number, col: number) {
    if (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[0].length ||
      grid[row][col] === "0"
    )
      return;

    grid[row][col] = "0";
    dfs(grid, row - 1, col);
    dfs(grid, row + 1, col);
    dfs(grid, row, col - 1);
    dfs(grid, row, col + 1);
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1") {
        count++;
        dfs(grid, row, col);
      }
    }
  }

  return count;
}

module.exports = numIslands;

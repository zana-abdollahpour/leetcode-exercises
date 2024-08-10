type Direction = "up" | "right" | "down" | "left";

function spiralOrder(matrix: number[][]) {
  const spiralArray: number[] = [];
  if (matrix.length === 0) return spiralArray;

  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let left = 0;

  let dir: Direction = "right";

  while (top <= bottom && left <= right) {
    if (dir === "right") {
      for (let i = left; i <= right; i++) {
        spiralArray.push(matrix[top][i]);
      }
      top++;
      dir = "down";
      continue;
    }

    if (dir === "down") {
      for (let i = top; i <= bottom; i++) {
        spiralArray.push(matrix[i][right]);
      }
      right--;
      dir = "left";
      continue;
    }

    if (dir === "left") {
      for (let i = right; i >= left; i--) {
        spiralArray.push(matrix[bottom][i]);
      }
      bottom--;
      dir = "up";
      continue;
    }

    if (dir === "up") {
      for (let i = bottom; i >= top; i--) {
        spiralArray.push(matrix[i][left]);
      }
      left++;
      dir = "right";
      continue;
    }
  }

  return spiralArray;
}

module.exports = spiralOrder;

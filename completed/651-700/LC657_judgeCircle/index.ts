type Direction = "U" | "D" | "L" | "R";

function judgeCircle(moves: string): boolean {
  let movesOnX = 0;
  let movesOnY = 0;

  for (const move of moves) {
    if (move === "U") movesOnY++;
    else if (move === "D") movesOnY--;
    else if (move === "L") movesOnX--;
    else movesOnX++;
  }

  return movesOnX === 0 && movesOnY === 0;
}

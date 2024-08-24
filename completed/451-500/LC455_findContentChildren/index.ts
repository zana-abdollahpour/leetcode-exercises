function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let contentChildCount = 0;
  let pointerG = 0;
  let pointerS = 0;

  while (pointerG < g.length && pointerS < s.length) {
    if (s[pointerS] >= g[pointerG]) {
      contentChildCount++;
      pointerG++;
    }
    pointerS++;
  }
  return contentChildCount;
}

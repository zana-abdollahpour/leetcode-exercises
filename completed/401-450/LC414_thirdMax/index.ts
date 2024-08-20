function thirdMax(nums: number[]): number {
  const distincts = new Set(nums);
  const sortedDistincts = Array.from(distincts).sort((a, b) => a - b);

  return sortedDistincts.length >= 3
    ? sortedDistincts[sortedDistincts.length - 3]
    : sortedDistincts[sortedDistincts.length - 1];
}

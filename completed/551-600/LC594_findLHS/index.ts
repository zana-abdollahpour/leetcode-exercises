function findLHS(nums: number[]): number {
  const map = new Map<number, number>();
  let max = 0;

  nums.forEach((num) => map.set(num, (map.get(num) || 0) + 1));

  for (const [key, value] of map)
    if (map.has(key + 1)) max = Math.max(max, value + (map.get(key + 1) || 0));

  return max;
}

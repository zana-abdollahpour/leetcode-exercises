function dominantIndex(nums: number[]): number {
  const sortedNums = [...nums].sort((a, b) => b - a);

  if (sortedNums[1] * 2 > sortedNums[0]) return -1;
  return nums.indexOf(sortedNums[0]);
}

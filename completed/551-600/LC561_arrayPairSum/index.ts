function arrayPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);
  return nums.reduce((s, c, i) => (Number.isInteger(i / 2) ? s + c : s), 0);
}

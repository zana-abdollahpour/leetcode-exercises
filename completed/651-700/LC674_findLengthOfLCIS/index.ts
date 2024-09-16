function findLengthOfLCIS(nums: number[]): number {
  let max = 1;
  let tempMax = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) tempMax++;
    else {
      max = Math.max(max, tempMax);
      tempMax = 1;
    }
  }

  return Math.max(max, tempMax);
}

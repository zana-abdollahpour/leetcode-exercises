function maxSubArray(nums: number[]) {
  if (nums.length === 1) return nums[0];

  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    nums[i] = Math.max(num, num + nums[i - 1]);
    max = Math.max(max, nums[i]);
  }

  return max;
}

module.exports = maxSubArray;

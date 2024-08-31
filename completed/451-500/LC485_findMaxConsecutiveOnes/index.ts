function findMaxConsecutiveOnes(nums: number[]): number {
  let max = 0;
  let tempMax = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      tempMax++;
      if (tempMax > max) max = tempMax;
    } else {
      max = Math.max(max, tempMax);
      tempMax = 0;
    }
  }

  return max;
}

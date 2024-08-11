/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    const val = nums[right];
    nums[right] = 0;
    if (val !== 0) {
      nums[left] = val;
      left++;
    }
  }
}

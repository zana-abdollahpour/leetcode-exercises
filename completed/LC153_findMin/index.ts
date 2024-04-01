function findMin(nums: number[]) {
  if (nums.length === 1) return nums[0];

  let left = 0;
  let right = nums.length - 1;
  if (nums[left] < nums[right]) return nums[left];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const leftVal = nums[left];
    const midVal = nums[mid];
    const leftOfMid = nums[mid - 1];
    const rightOfMid = nums[mid + 1];

    if (midVal > rightOfMid) return rightOfMid;
    else if (leftOfMid > midVal) return midVal;

    if (midVal > leftVal) left = mid + 1;
    else right = mid - 1;
  }
}

module.exports = findMin;

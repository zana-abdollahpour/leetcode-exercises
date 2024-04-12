function searchInsert(nums: number[], target: number) {
  function findNum(left: number, right: number): number {
    if (left > right) return left;
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) return findNum(mid + 1, right);
    return findNum(left, mid - 1);
  }

  return findNum(0, nums.length - 1);
}

function search(nums: number[], target: number) {
  function findMinIndex(rotatedSortedArr: number[]) {
    let left = 0;
    let right = rotatedSortedArr.length - 1;

    if (rotatedSortedArr.length === 1) return 0;
    if (rotatedSortedArr[left] < rotatedSortedArr[right]) return 0;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (rotatedSortedArr[mid] < rotatedSortedArr[mid - 1]) return mid;
      if (rotatedSortedArr[mid] > rotatedSortedArr[mid + 1]) return mid + 1;
      if (rotatedSortedArr[mid] < rotatedSortedArr[left]) right = mid - 1;
      else left = mid + 1;
    }
  }

  function binarySearch(
    arr: number[],
    target: number,
    left: number,
    right: number
  ) {
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) return mid;
      else if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return -1;
  }

  const minIndex = findMinIndex(nums)!;
  const left = binarySearch(nums, target, 0, minIndex - 1);
  const right = binarySearch(nums, target, minIndex, nums.length - 1);

  return Math.max(left, right);
}

module.exports = search;

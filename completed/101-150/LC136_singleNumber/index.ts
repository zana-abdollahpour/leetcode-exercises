function singleNumber(nums: number[]): number {
  const sortedArr = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length; i = i + 2)
    if (sortedArr[i] !== sortedArr[i + 1]) return sortedArr[i];

  return nums[nums.length - 1];
}

console.log(singleNumber([4, 1, 2, 1, 2]));

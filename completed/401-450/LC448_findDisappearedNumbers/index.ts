// function findDisappearedNumbers(nums: number[]): number[] {
//   const perfectArray = Array.from({ length: nums.length }, (_, i) => i + 1);
//   const checkSet = new Set(perfectArray);

//   for (let i = 0; i < nums.length; i++)
//     if (checkSet.has(nums[i])) checkSet.delete(nums[i]);

//   return Array.from(checkSet);
// }

// function findDisappearedNumbers(nums: number[]): number[] {
//   const set = new Set(nums);
//   const result = [];

//   for (let i = 1; i < nums.length + 1; i++) {
//     if (!set.has(i)) result.push(i);
//   }

//   return result;
// }

function findDisappearedNumbers(nums: number[]): number[] {
  const disappeared: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const curNum = nums[i];
    if (nums[curNum - 1] !== curNum) {
      nums[i] = nums[curNum - 1];
      nums[curNum - 1] = curNum;
      i--;
    }
  }

  for (let i = 0; i < nums.length; i++)
    if (nums[i] !== i + 1) disappeared.push(i + 1);

  return disappeared;
}

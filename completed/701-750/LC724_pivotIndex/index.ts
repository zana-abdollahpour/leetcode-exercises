// function pivotIndex(nums: number[]): number {
//   let leftSum = 0;
//   let rightSum = nums.reduce((acc, num) => acc + num, 0) - nums[0];
//   if (leftSum === rightSum) return 0;

//   for (let i = 1; i < nums.length; i++) {
//     leftSum += nums[i - 1];
//     rightSum -= nums[i];
//     if (leftSum === rightSum) return i;
//   }

//   return -1;
// }

function pivotIndex(nums: number[]): number {
  let leftSum = 0;
  let rightSum = nums.reduce((sum, cur) => sum + cur, 0);

  for (let i = 0; i < nums.length; i++) {
    if (leftSum === rightSum - leftSum - nums[i]) return i;
    leftSum += nums[i];
  }

  return -1;
}

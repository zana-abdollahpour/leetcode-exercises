// function missingNumber(nums: number[]): number {
//   const sortedNums = nums.sort((a, b) => a - b);

//   for (let i = 0; i < sortedNums.length; i++) if (sortedNums[i] !== i) return i;

//   return sortedNums.length;
// }

function missingNumber(nums: number[]): number {
  const n = nums.length;

  const perfectSum = (n * (n + 1)) / 2;
  const currentSum = nums.reduce((acc, num) => acc + num, 0);

  return perfectSum - currentSum;
}

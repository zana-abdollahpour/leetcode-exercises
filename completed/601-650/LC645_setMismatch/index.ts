// function findErrorNums(nums: number[]): number[] {
//   const uniques = new Set(nums);
//   const removed = Array.from(
//     { length: nums.length },
//     (_, idx) => idx + 1
//   ).filter((n) => !uniques.has(n));

//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (uniques.has(nums[i])) {
//       uniques.delete(nums[i]);
//       nums.splice(i, 1);
//     }
//   }

//   return [nums[0], removed[0]];
// }

function findErrorNums(nums: number[]): number[] {
  const len = nums.length;
  let actualSum = 0;
  let actualSumOfSquares = 0;
  const expectedSum = (len * (len + 1)) / 2;
  const expectedSumOfSquares = (len * (len + 1) * (2 * len + 1)) / 6;

  nums.forEach((num) => {
    actualSum += num;
    actualSumOfSquares += num * num;
  });

  const sumDiff = expectedSum - actualSum;
  const squareSumDiff = expectedSumOfSquares - actualSumOfSquares;

  const sumOfNumbers = squareSumDiff / sumDiff;

  const missing = (sumDiff + sumOfNumbers) / 2;
  const duplicate = missing - sumDiff;

  return [duplicate, missing];
}

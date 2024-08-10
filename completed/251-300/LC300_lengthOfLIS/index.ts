// NOT fully correct
// function lengthOfLIS(nums: number[]) {
//   if (nums.length === 0) return 0;
//   const container: Array<number[]> = [];

//   [0, 1, 0, 3, 2, 3];

//   for (let i = 0; i < nums.length; i++) {
//     const curArray = [nums[i]];
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] > curArray[curArray.length - 1]) curArray.push(nums[j]);
//     }
//     container.push(curArray);
//   }

//   let longestSequence = 1;
//   for (let i = 0; i < container.length; i++) {
//     longestSequence = Math.max(longestSequence, container[i].length);
//   }

//   return longestSequence;
// }

function lengthOfLIS(nums: number[]) {
  if (nums.length === 0) return 0;

  const dpSubsequence = new Array(nums.length).fill(1);
  let maxSoFar = 1;

  for (let j = 1; j < nums.length; j++) {
    for (let i = 0; i < j; i++) {
      if (nums[j] > nums[i])
        dpSubsequence[j] = Math.max(dpSubsequence[i] + 1, dpSubsequence[j]);
    }

    maxSoFar = Math.max(maxSoFar, dpSubsequence[j]);
  }

  return maxSoFar;
}

module.exports = lengthOfLIS;

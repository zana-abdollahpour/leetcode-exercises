// Exceeds time limit
// function findShortestSubArray(nums: number[]): number {
//   const frequncies: Map<number, number[]> = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const curFreq = frequncies.get(nums[i]);
//     frequncies.set(nums[i], curFreq?.length ? [...curFreq, i] : [i]);
//   }
//   const repeats = [...frequncies.values()];
//   const degree = repeats.reduce((max, cur) => Math.max(max, cur.length), 0);

//   const possibleSubs = repeats.filter((repeat) => repeat.length === degree);
//   const distances = possibleSubs.map((sub) => sub[sub.length - 1] - sub[0] + 1);

//   return Math.min(...distances);
// }

function findShortestSubArray(nums: number[]): number {
  const firstInstance = new Map();
  const repetition = new Map();
  let max = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    const amount = (repetition.get(nums[i]) ?? 0) + 1;
    repetition.set(nums[i], amount);

    if (amount === 1) firstInstance.set(nums[i], i);

    if (amount > max) {
      max = amount;
      result = i - firstInstance.get(nums[i]) + 1;
    } else if (amount === max) {
      const length = i - firstInstance.get(nums[i]) + 1;
      if (length < result) result = length;
    }
  }

  return result;
}

console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2]));

/* const productExceptSelf = (nums: number[]): number[] => {
  const zeroCount = nums.filter((val) => val === 0).length;
  let answer: number[] = Array.from({ length: nums.length });
  if (zeroCount > 1) {
    answer.fill(0);
  } else {
    const sum = nums.reduce((sum, cur) => (cur === 0 ? sum : sum * cur), 1);
    if (zeroCount === 1) {
      const zeroIndex = nums.findIndex((val) => val === 0);
      answer.fill(0);
      answer[zeroIndex] = sum;
    } else {
      answer = Array.from({ length: nums.length }).map(
        (_, i) => sum * Math.pow(nums[i], -1)
      );
    }
  }
  return answer;
}; */

const productExceptSelf = (nums: number[]): number[] => {
  const output = nums.map(() => 1);
  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    output[i] = output[i] * product;
    product *= nums[i];
  }

  product = 1;

  for (let j = nums.length - 1; j >= 0; j--) {
    output[j] = output[j] * product;
    product *= nums[j];
  }

  return output;
};

// const productExceptSelf = (nums: number[]): number[] => {
//   const front: number[] = Array.from({ length: nums.length });
//   const back: number[] = Array.from({ length: nums.length });

//   let frontTracker = 1;
//   let backTracker = 1;/*  */

//   const length = nums.length;

//   for (let i = length - 1; i >= 0; i--) {
//     front[length - i - 1] = frontTracker * nums[length - i - 1];
//     frontTracker = front[length - i - 1];
//     back[i] = backTracker * nums[i];
//     backTracker = back[i];
//   }

//   for (let i = 0; i < length; i++) {
//     if (i == 0) nums[i] = back[i + 1];
//     else if (i == length - 1) nums[i] = front[i - 1];
//     else nums[i] = back[i + 1] * front[i - 1];
//   }

//   return nums;
// };

module.exports = productExceptSelf;

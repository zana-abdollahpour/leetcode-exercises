// function findMaxAverage(nums: number[], k: number): number {
//   let sum = nums.slice(0, k).reduce((sum, n) => sum + n, 0);
//   let maxAvg = +(sum / k).toFixed(5);

//   for (let i = 0; i < nums.length - k; i++) {
//     sum = sum - nums[i] + nums[i + k];
//     const curAvg = +(sum / k).toFixed(5);
//     maxAvg = Math.max(maxAvg, curAvg);
//   }

//   return maxAvg;
// }

function findMaxAverage(nums: number[], k: number): number {
  let maxAvg = -Infinity;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (i >= k) {
      sum -= nums[i - k];
      maxAvg = Math.max(maxAvg, sum);
    } else {
      maxAvg = sum;
    }
  }

  return maxAvg / k;
}

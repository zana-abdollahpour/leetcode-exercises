// function maximumProduct(nums: number[]): number {
//   nums.sort((a, b) => b - a);

//   let largestProd = nums[0] * nums[1] * nums[2];
//   let smallestProd = nums[0] * nums[nums.length - 1] * nums[nums.length - 2];

//   return Math.max(largestProd, smallestProd);
// }

function maximumProduct(nums: number[]): number {
  if (nums.length === 3) return nums[0] * nums[1] * nums[2];

  let max1 = -Infinity;
  let max2 = -Infinity;
  let max3 = -Infinity;
  let min1 = Infinity;
  let min2 = Infinity;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num > max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max3 = max2;
      max2 = num;
    } else if (num > max3) {
      max3 = num;
    }

    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
  }

  const product1 = max1 * max2 * max3;
  const product2 = min1 * min2 * max1;

  return Math.max(product1, product2);
}

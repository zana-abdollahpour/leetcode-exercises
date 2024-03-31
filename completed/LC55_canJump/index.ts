/* function canJump(nums: number[]) {
  const dpPositions = new Array(nums.length).fill(false);
  dpPositions[0] = true;

  for (let j = 1; j < nums.length; j++) {
    for (let i = 0; i < j; i++) {
      if (dpPositions[i] && i + nums[i] >= j) {
        dpPositions[j] = true;
        break;
      }
    }
  }

  return dpPositions[dpPositions.length - 1];
}
*/

function canJump(nums: number[]) {
  if (nums.length <= 1) return true;
  let max = nums[0]; // max possible rechable index
  let i = 0;
  while (i <= max) {
    max = Math.max(nums[i] + i++, max);
    if (max >= nums.length - 1) return true;
  }
  return false;
}

module.exports = canJump;

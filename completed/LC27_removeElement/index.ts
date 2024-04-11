function removeElement(nums: number[], val: number) {
  let pointer = 0;

  while (pointer < nums.length) {
    if (nums[pointer] === val) {
      nums[pointer] = nums[nums.length - 1];
      nums.pop();
    } else pointer++;
  }
  return nums.length;
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

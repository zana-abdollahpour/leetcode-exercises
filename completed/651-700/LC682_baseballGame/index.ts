function calPoints(operations: string[]): number {
  const nums: number[] = [];

  for (const op of operations) {
    if (op === "+") {
      nums.push(nums[nums.length - 1] + nums[nums.length - 2]);
    } else if (op === "C") {
      nums.pop();
    } else if (op === "D") {
      nums.push(nums[nums.length - 1] * 2);
    } else {
      nums.push(+op);
    }
  }

  return nums.reduce((acc, val) => acc + val, 0);
}

function summaryRanges(nums: number[]): string[] {
  const result: string[] = [];
  let str = "";

  let start = nums[0];

  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] - nums[i - 1] === 1) continue;

    str = start === nums[i - 1] ? `${start}` : `${start}->${nums[i - 1]}`;

    result.push(str);
    start = nums[i];
  }

  return result;
}

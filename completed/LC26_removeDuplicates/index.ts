function removeDuplicates(nums: number[]): number {
  const uniques = [...new Set(nums)];
  nums.fill(-1);

  uniques.forEach((val, i) => (nums[i] = val));

  return uniques.length;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

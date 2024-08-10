const containsDuplicate = (nums: number[]): boolean => {
  if (nums.length === 1) return false;

  const map: Record<string, number> = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) return true;
    else map[nums[i]] = 1;
  }

  return false;
};

module.exports = containsDuplicate;

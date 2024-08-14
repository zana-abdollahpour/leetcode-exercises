function intersect(nums1: number[], nums2: number[]): number[] {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let x = 0;
  let y = 0;
  const result: number[] = [];

  while (x < nums1.length && y < nums2.length) {
    if (nums1[x] < nums2[y]) x++;
    else if (nums1[x] > nums2[y]) y++;
    else {
      result.push(nums1[x]);
      x++;
      y++;
    }
  }

  return result;
}

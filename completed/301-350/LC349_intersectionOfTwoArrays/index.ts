// const intersection = (nums1: number[], nums2: number[]): number[] => {
//   const nums1Uniques = Array.from(new Set(nums1));
//   const nums2Uniques = Array.from(new Set(nums2));

//   const nums1Items: Record<string, "true"> = {};
//   const nums2Items: Record<string, "true"> = {};

//   nums1Uniques.forEach((item) => (nums1Items[item] = "true"));
//   nums2Uniques.forEach((item) => (nums2Items[item] = "true"));

//   const intersection: number[] = [];

//   for (const key of Object.keys(nums1Items)) {
//     if (nums2Items[key]) intersection.push(Number(key));
//   }

//   return intersection;
// };

function intersection(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set<number>(nums1);
  const set2 = new Set<number>(nums2);

  const result: number[] = [];

  for (const num of set1) if (set2.has(num)) result.push(num);

  return result;
}

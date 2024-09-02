// function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
//   const nums2Map: Record<string, number> = nums2.reduce(
//     (acc, num, i) => ({ ...acc, [num]: i }),
//     {}
//   );

//   let res: number[] = [];
//   for (let i = 0; i < nums1.length; i++) {
//     const cur = nums1[i];
//     const greater = nums2.slice(nums2Map[cur]).find((el) => el > cur);
//     res.push(greater || -1);
//   }

//   return res;
// }

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  return nums1.map((num1, i) => {
    let j = nums2.indexOf(num1);
    if (j === -1) return j;
    for (let k = j + 1; k < nums2.length; k++) {
      if (nums2[k] > nums2[j]) return nums2[k];
    }
    return -1;
  });
}

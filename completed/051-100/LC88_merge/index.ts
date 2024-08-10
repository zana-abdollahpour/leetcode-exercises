/* function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  nums1 = nums1.slice(0, m);
  nums2 = nums2.slice(0, n);

  function insertionSort(arr: number[]) {
    let currentVal;
    for (let i = 1; i < arr.length; i++) {
      currentVal = arr[i];

      let j = i - 1;
      while (j >= 0 && arr[j] > currentVal) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = currentVal;
    }
    return arr;
  }

  for (let i = 0; i < nums2.length; i++) {
    nums1 = [...nums1, nums2[i]];
    insertionSort(nums1);
  }
} */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] < nums2[j]) {
      nums1[k] = nums2[j];
      k--;
      j--;
    } else {
      nums1[k] = nums1[i];
      k--;
      i--;
    }
  }

  while (j >= 0) {
    nums1[k] = nums2[j];
    k--;
    j--;
  }

  while (i >= 0) {
    nums1[k] = nums1[i];
    k--;
    i--;
  }
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

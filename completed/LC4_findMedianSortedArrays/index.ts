function findMedianSortedArrays(nums1: number[], nums2: number[]) {
  /*   function insertionSort(arr: number[]) {
    let currentVal: number;
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

  const mergedArr = insertionSort([...nums1, ...nums2]);
  console.log(mergedArr);
  const lengthIsOdd = mergedArr.length % 2 === 1;
  const finalResult = lengthIsOdd
    ? mergedArr[Math.ceil(mergedArr.length / 2 - 1)]
    : (mergedArr[mergedArr.length / 2 - 1] + mergedArr[mergedArr.length / 2]) /
      2;

  return finalResult; */

  /*   function merge(left: number[], right: number[]) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }

  function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }

  const mergedArr = mergeSort([...nums1, ...nums2]);
  console.log(mergedArr);
  const lengthIsOdd = mergedArr.length % 2 === 1;
  const finalResult = lengthIsOdd
    ? mergedArr[Math.ceil(mergedArr.length / 2 - 1)]
    : (mergedArr[mergedArr.length / 2 - 1] + mergedArr[mergedArr.length / 2]) /
      2;

  return finalResult; */

  const sortedArray = [...nums1, ...nums2].sort((a, b) => a - b);
  const middle = sortedArray.length / 2;

  const lengthIsOdd = middle % 1 > 0;

  return lengthIsOdd
    ? sortedArray[middle - 0.5]
    : (sortedArray[middle - 1] + sortedArray[middle]) / 2;
}

console.log(findMedianSortedArrays([1, 3], [2]));

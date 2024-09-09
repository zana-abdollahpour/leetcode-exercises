// function findRestaurant(list1: string[], list2: string[]): string[] {
//   const indexMap = new Map<string, number[]>();

//   for (let i = 0; i < Math.max(list1.length, list2.length); i++) {
//     const curItem1 = list1[i];
//     const curItem2 = list2[i];

//     const mapItem1 = indexMap.get(curItem1);
//     if (mapItem1) mapItem1.push(i);
//     else indexMap.set(curItem1, [i]);

//     const mapItem2 = indexMap.get(curItem2);
//     if (mapItem2) mapItem2.push(i);
//     else indexMap.set(curItem2, [i]);
//   }

//   let indexDiff: [string, number][] = [];
//   for (const [str, indexes] of indexMap) {
//     if (indexes.length < 2) continue;
//     indexDiff.push([str, indexes.reduce((acc, idx) => acc + idx)]);
//   }

//   indexDiff.sort((a, b) => a[1] - b[1]);
//   const result = indexDiff
//     .filter((item, _, arr) => item[1] === arr[0][1])
//     .map((item) => item[0]);

//   return result;
// }

function findRestaurant(list1: string[], list2: string[]): string[] {
  const listMap1 = new Map<string, number>();
  const commonMap = new Map<number, string[]>();

  list1.forEach((str, index1) => listMap1.set(str, index1));

  list2.forEach((str, index2) => {
    if (listMap1.has(str)) {
      const index1 = listMap1.get(str)!;
      commonMap.set(index2 + index1, [
        ...(commonMap.get(index2 + index1) ?? []),
        str,
      ]);
    }
  });

  const min = Math.min(...commonMap.keys());

  return commonMap.get(min)!;
}

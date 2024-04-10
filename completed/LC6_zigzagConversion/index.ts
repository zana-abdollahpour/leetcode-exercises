function convert(s: string, numRows: number) {
  let result = [];
  if (numRows === 1) return s;

  for (let i = 0; i < numRows; i++) {
    const current = s[i];
    result.push(current);
    let numRowsInt = 1;
    const peak = 2 * (numRows - 1);

    while (s[peak * numRowsInt + i - 2 * i]) {
      const first = s[peak * numRowsInt + i] || "";
      const second =
        i !== 0 && i < numRows - 1 ? s[peak * numRowsInt + i - 2 * i] : "";
      result.push(second, first);
      numRowsInt++;
    }
  }
  return result.join("");
}

/* function convert(s: string, numRows: number): string {
  let finalString = "";
  let mod = 2 * (numRows - 1);
  let step = 0;

  while (finalString.length < s.length) {
    const curChars = s
      .split("")
      .filter((_, index) => {
        return (
          Math.abs((index % mod) - mod) === step ||
          Math.abs((index % mod) - mod) === mod - step ||
          mod === 0
        );
      })
      .join("");

    finalString = finalString + curChars;
    step += 1;
  }

  return finalString;
} */

const res = convert("PAYPALISHIRING", 4);
console.log(res);

// const peakIndexes = [];
// const bottomIndexes = [];

// Find peaks and bottoms
// for (let i = 0; true; i++) {
//   const peakIdx = 2 * i * (numRows - 1);
//   if (s[peakIdx] === undefined) break;
//   peakIndexes.push(peakIdx);
//   const bottomIdx = peakIdx + numRows - 1;
//   if (s[bottomIdx] === undefined) break;
//   bottomIndexes.push(bottomIdx);
// }

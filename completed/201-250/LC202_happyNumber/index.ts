// function isHappy(n: number): boolean {
//   const numString = n.toString();

//   const squaresSum = numString
//     .split("")
//     .reduce((acc, num) => acc + Math.pow(+num, 2), 0);

//   if (squaresSum === 1 || squaresSum === 7) return true;

//   if (squaresSum.toString().length === 1) return false;

//   return isHappy(squaresSum);
// }

function isHappy(n: number): boolean {
  let value = n;
  let seen = new Set<number>();

  while (value !== 1 && !seen.has(value)) {
    seen.add(value);
    value = value
      .toString()
      .split("")
      .reduce((result, num) => result + Math.pow(+num, 2), 0);
  }

  return value === 1;
}

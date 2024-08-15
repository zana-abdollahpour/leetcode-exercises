// function isPerfectSquare(num: number): boolean {
//   return num ** 0.5 % 1 === 0;
// }

function isPerfectSquare(num: number): boolean {
  for (let x = 1; x * x <= num; x++) if (num / x === x) return true;
  return false;
}

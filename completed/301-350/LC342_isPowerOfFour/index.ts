const isPowerOfFour = (n: number): boolean =>
  (Math.log10(n) / Math.log10(4)) % 1 === 0;

// function isPowerOfFour(n: number): boolean {
//   if (n === 1 || n === 4 || n === 16) return true
//   if (n < 16) return false

//   return isPowerOfFour(n / 4)
// };

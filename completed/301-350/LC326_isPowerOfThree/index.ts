const isPowerOfThree = (n: number): boolean =>
  Number.isInteger(Math.log10(n) / Math.log10(3));

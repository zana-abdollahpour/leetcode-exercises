/* function reverse(x: number): number {
  if (x === 0) return 0;

  const isNegative = x < 0;
  const digits = [...String(Math.abs(x))];
  while (digits[digits.length - 1] === "0") digits.pop();
  const reversed = parseInt(digits.reverse().join(""));

  const limit = Math.pow(2, 31);
  if (reversed > limit - 1 || reversed < -limit) return 0;

  return isNegative ? -reversed : reversed;
} */

function reverse(x: number): number {
  if (x === 0) return 0;

  const isNegative = x < 0;
  const digits = [...String(Math.abs(x))];
  while (digits[digits.length - 1] === "0") digits.pop();
  const reversed = parseInt(digits.reverse().join(""));

  const limit = Math.pow(2, 31);
  if (reversed > limit - 1 || reversed < -limit) return 0;

  return isNegative ? -reversed : reversed;
}

console.log(reverse(-123));
console.log(reverse(0));
console.log(reverse(1534236469));

// function addDigits(num: number): number {
//   if (num <= 9) return num;

//   const numString = num.toString();
//   const digitsSum = numString
//     .split("")
//     .reduce((acc, digit) => acc + Number(digit), 0);

//   return addDigits(digitsSum);
// }

const addDigits = (num: number) => (num === 0 ? 0 : 1 + ((num - 1) % 9));

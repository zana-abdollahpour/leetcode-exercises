function plusOne(digits: number[]): number[] {
  digits[digits.length - 1]++;

  for (let i = digits.length - 1; i >= 0; i--) {
    const cur = digits[i];
    if (cur < 10) break;
    else {
      digits[i] = 0;
      digits[i - 1] ? digits[i - 1]++ : digits.unshift(1);
    }
  }

  return digits;
}

export default plusOne;

function intToRoman(num: number): string {
  const map: Record<string, string> = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  let results = "";
  const checker = [10, 100, 1000, 10000];
  for (let i = 0; i < checker.length, num > 0; i++) {
    const found = num % checker[i];

    if (map[found]) {
      results = map[found] + results;
      num -= found;
      continue;
    }
    const uniq = checker[i] / 10;
    for (let j = found; j > 0; j -= uniq) {
      if (map[j]) {
        results = map[j] + results;
        break;
      } else {
        results = map[uniq] + results;
      }
    }
    num -= found;
  }

  return results;
}

console.log(intToRoman(1994));
console.log(intToRoman(58));
console.log(intToRoman(3));

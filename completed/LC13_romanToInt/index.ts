function romanToInt(s: string): number {
  const romanMap: Record<string, number> = {
    I: 1,
    IV: 5,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const current = romanMap[s[i]];
    const next = romanMap[s[i + 1]];

    if (current < next) {
      sum += next - current;
      i++;
    } else {
      sum += current;
    }
  }

  return sum;
}

// console.log(romanToInt("III"), "<-->", 3);
// console.log(romanToInt("LVIII"), "<-->", 58);
console.log(romanToInt("MCMXCIV"), "<-->", 1994);

function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return [];
  const map: Record<string, string[]> = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const combinations: string[] = [];

  const backtrack = (currentCombination: string, nextDigits: string) => {
    if (nextDigits.length === 0) {
      combinations.push(currentCombination);
      return;
    }

    const currentDigit = nextDigits[0];
    const letters = map[currentDigit];
    for (let letter of letters) {
      backtrack(currentCombination + letter, nextDigits.slice(1));
    }
  };

  backtrack("", digits);

  return combinations;
}

console.log(letterCombinations("2345"));
// console.log(letterCombinations("23"));

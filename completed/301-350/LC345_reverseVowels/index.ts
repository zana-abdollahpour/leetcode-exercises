function reverseVowels(s: string): string {
  const vowels = ["a", "e", "i", "o", "u"];
  const charsArr = Array.from(s);

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const leftIsVowel = vowels.includes(charsArr[left].toLowerCase());
    const rightIsVowel = vowels.includes(charsArr[right].toLowerCase());

    if (leftIsVowel && rightIsVowel) {
      [charsArr[left], charsArr[right]] = [charsArr[right], charsArr[left]];
      left++;
      right--;
    } else if (leftIsVowel) {
      right--;
    } else if (rightIsVowel) {
      left++;
    } else {
      left++;
      right--;
    }
  }

  return charsArr.join("");
}

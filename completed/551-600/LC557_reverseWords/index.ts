const reverseChars = (s: string): string => {
  const charsArr = s.split("");

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [charsArr[left], charsArr[right]] = [charsArr[right], charsArr[left]];
    left++;
    right--;
  }

  return charsArr.join("");
};

function reverseWords(s: string): string {
  const wordsArr = s.split(" ");

  for (let i = 0; i < wordsArr.length; i++) {
    const reversedWord = reverseChars(wordsArr[i]);
    wordsArr[i] = reversedWord;
  }

  return wordsArr.join(" ");
}

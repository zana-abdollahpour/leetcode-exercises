function findWords(words: string[]): string[] {
  const row1 = new Set("qwertyuiop");
  const row2 = new Set("asdfghjkl");
  const row3 = new Set("zxcvbnm");

  let res: string[] = [];
  words.forEach((word) => {
    const chars = word.toLowerCase().split("");
    if (
      chars.every((char) => row1.has(char)) ||
      chars.every((char) => row2.has(char)) ||
      chars.every((char) => row3.has(char))
    )
      res.push(word);
  });

  return res;
}

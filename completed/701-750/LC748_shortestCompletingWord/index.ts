function shortestCompletingWord(licensePlate: string, words: string[]): string {
  const chars = licensePlate
    .toLowerCase()
    .split("")
    .filter((ltr) => ltr.charCodeAt(0) >= 97 && ltr.charCodeAt(0) <= 122);

  console.log(chars);

  const possibleWords = words.filter((word) => {
    let test = word;
    for (const char of chars) {
      if (test.includes(char.toLowerCase())) test = test.replace(char, "");
      else return false;
    }
    return true;
  });

  return possibleWords.sort((a, b) => a.length - b.length)[0];
}

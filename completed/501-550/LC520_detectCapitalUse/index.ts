function detectCapitalUse(word: string): boolean {
  const codeA = "A".charCodeAt(0); // 65
  const codeZ = "Z".charCodeAt(0); // 90

  const isCapital = (char: string) => {
    const charCode = char.charCodeAt(0);
    return charCode >= codeA && charCode <= codeZ;
  };

  const chars = word.slice(1).split("");
  const allAreCapital = chars.every(isCapital);
  const allNotCapital = chars.every((char) => !isCapital(char));

  let res: boolean;
  if (isCapital(word[0])) res = allAreCapital || allNotCapital;
  else res = allNotCapital;

  return res;
}

// function detectCapitalUse(word: string): boolean {
//   let upperCasedCount = 0;

//   const isUpperCased = (char: string) => char.toUpperCase() === char;

//   for (let i = 0; i < word.length; i++)
//     if (isUpperCased(word.charAt(i))) upperCasedCount++;

//   return (
//     upperCasedCount === 0 ||
//     (upperCasedCount === 1 && isUpperCased(word.charAt(0))) ||
//     upperCasedCount === word.length
//   );
// }

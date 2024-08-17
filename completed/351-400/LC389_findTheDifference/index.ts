/* function findTheDifference(s: string, t: string): string {
  const freqs = Array(26).fill(0);
  const aCode = "a".charCodeAt(0);

  for (let i = 0; i < t.length; i++) {
    freqs[t[i].charCodeAt(0) - aCode] += 1;

    if (i < s.length) freqs[s[i].charCodeAt(0) - aCode] -= 1;
  }

  return String.fromCharCode(aCode + freqs.findIndex((i) => i === 1));
} */

/* function findTheDifference(s: string, t: string): string {
  const sMap: Record<string, number> = {};
  const tMap: Record<string, number> = {};

  for (let i = 0; i < t.length; i++) {
    if (i < s.length) sMap[s[i]] = sMap[s[i]] + 1 || 1;
    tMap[t[i]] = tMap[t[i]] + 1 || 1;
  }

  for (const [char, count] of Object.entries(tMap))
    if (count - sMap[char] === 1) return char;

  return t[t.length - 1];
}
 */

function findTheDifference(s: string, t: string): string {
  const sum = (str: string) => {
    let sum = 0;
    for (let i = 0; i < str.length; i++) sum = sum + str.charCodeAt(i);
    return sum;
  };

  const letter = sum(t) - sum(s);

  return String.fromCharCode(letter);
}

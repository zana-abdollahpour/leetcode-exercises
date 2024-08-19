function longestPalindrome(s: string): number {
  const set = new Set<string>();
  let longestCount = 0;

  s.split("").forEach((character) => {
    if (set.has(character)) {
      set.delete(character);
      longestCount += 2;
    } else {
      set.add(character);
    }
  });

  return longestCount + Number(set.size > 0);
}

/* 
function longestPalindrome(s: string): number {
  if (s.length === 1) return 1;

  let arr: number[] = new Array(52).fill(0);
  let aCharCode = "a".charCodeAt(0);
  let ACharCode = "A".charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    let currCode = s.charAt(i).charCodeAt(0);
    if (currCode < aCharCode) arr[currCode - ACharCode + 26]++;
    else arr[currCode - aCharCode]++;
  }

  let longest = 0;
  let includesOne = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) longest += arr[i];
    else if (!includesOne) {
      longest += arr[i];
      includesOne = true;
    } else longest += arr[i] - 1;
  }

  return longest;
}
 */

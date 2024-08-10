function isAnagram(s: string, t: string) {
  if (s.length !== t.length) return false;

  const sCharCount = {};

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    sCharCount[sChar] = sCharCount[sChar] + 1 || 1;
  }

  for (let j = 0; j < t.length; j++) {
    const tChar = t[j];
    if (!sCharCount[tChar]) return false;
    else sCharCount[tChar]--;
  }

  return true;
}

module.exports = isAnagram;

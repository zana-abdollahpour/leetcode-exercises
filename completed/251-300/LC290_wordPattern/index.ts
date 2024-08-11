function wordPattern(pattern: string, s: string): boolean {
  const str = s.split(" ");
  const uniqueChars = new Set(pattern);
  const uniqueWords = new Set(str);

  if (uniqueChars.size !== uniqueWords.size || pattern.length !== str.length)
    return false;

  const patternMap: Record<string, string> = {};

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    if (!patternMap[char]) {
      patternMap[char] = str[i];
    } else {
      if (patternMap[char] !== str[i]) return false;
    }
  }

  return true;
}

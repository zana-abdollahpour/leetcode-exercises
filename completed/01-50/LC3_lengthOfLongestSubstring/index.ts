// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s: string) {
  let windowCharsMap = {};
  let windowStart = 0;
  let maxlength = 0;

  for (let i = 0; i < s.length; i++) {
    const endChar = s[i];

    if (windowCharsMap[endChar] >= windowStart) {
      windowStart = windowCharsMap[endChar] + 1;
    }

    windowCharsMap[endChar] = i;
    maxlength = Math.max(maxlength, i - windowStart + 1);
  }

  return maxlength;
}

module.exports = lengthOfLongestSubstring;

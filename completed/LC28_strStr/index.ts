function strStr(haystack: string, needle: string): number {
  if (needle.length > haystack.length) return -1;
  if (needle.length === 1) return [...haystack].indexOf(needle);
  if (haystack === needle) return 0;

  let showIndex = -1;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    console.log(haystack.slice(i, i + needle.length));
    if (haystack.slice(i, i + needle.length) === needle) {
      showIndex = i;
      break;
    }
  }

  return showIndex;
}

// console.log(strStr("abosadbutsad", "sad")); // 0
// console.log(strStr("leetcode", "leeto")); // -1
// console.log(strStr("hello", "ll")); // 2
console.log(strStr("mississippi", "pi")); // 2

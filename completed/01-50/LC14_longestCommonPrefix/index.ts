function longestCommonPrefix(strs: string[]): string {
  let prefix = strs[0];
  if (strs.length === 1) return prefix;

  strs.forEach((str) => {
    for (let i = 0; i < str.length; i++) {
      if (prefix[i] !== str[i]) prefix = prefix.slice(0, i);
      if (prefix.length === 0) return "";
    }
    if (str.length < prefix.length) prefix = str;
  });

  return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["ab", "a"]));

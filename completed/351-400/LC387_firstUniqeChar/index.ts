// function firstUniqChar(s: string): number {
//   const arr = s.split("");
//   const result = arr.findIndex(
//     (el, _, arr) => arr.indexOf(el) === arr.lastIndexOf(el)
//   );
//   return result;
// }

function firstUniqChar(s: string): number {
  const chars = Array(26).fill(0);
  const codeA = "a".charCodeAt(0);
  const n = s.length;

  for (let i = 0; i < n; i++) chars[s.charCodeAt(i) - codeA]++;
  for (let i = 0; i < n; i++)
    if (chars[s.charCodeAt(i) - codeA] === 1) return i;

  return -1;
}

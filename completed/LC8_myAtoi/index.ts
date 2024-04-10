function myAtoi(s: string): number {
  /*   s = s.trim();
  let str = "";
  let isPositve = s[0] !== "-";
  if (s[0] === "+" || s[0] === "-") s = s.slice(1);

  for (let i = 0; i < s.length; i++) {
    const el = s[i];
    if (!isNaN(+el)) str += el;
    else break;
  }

  while (true) {
    if (str[0] === "0" && str[1] === " ") return 0;
    if (str[0] === "0") str = str.slice(1);
    else break;
  }
  console.log(str);
  let finalStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") break;
    finalStr += str[i];
  }
  console.log(finalStr);

  const finalNum = isPositve ? Math.abs(+finalStr) : -Math.abs(+finalStr);
  const limit = Math.pow(2, 31);
  if (finalNum > limit - 1) return limit - 1;
  if (finalNum < -limit) return -limit;

  return finalNum; */

  const finalNum = parseInt(s);
  const limit = Math.pow(2, 31);
  if (finalNum > limit - 1) return limit - 1;
  if (finalNum < -limit) return -limit;
  return isNaN(finalNum) ? 0 : finalNum;
}

// console.log(myAtoi("4193 with words")); // 4193
// console.log(myAtoi("   +0 123")); // 0
// console.log(myAtoi("  0000000000012345678")); //
console.log(myAtoi("    -88827   5655  U")); // -88827

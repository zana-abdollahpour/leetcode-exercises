const isValid = (s: string) => {
  let stack: string[] = [];
  let pairsHashMap = { "(": ")", "{": "}", "[": "]" };

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (pairsHashMap[char]) stack.push(char);
    else if (pairsHashMap[stack.pop()!] !== char) return false;
  }

  return stack.length === 0;
};

module.exports = isValid;

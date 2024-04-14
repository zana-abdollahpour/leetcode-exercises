function lengthOfLastWord(s: string): number {
  s = s.trim();
  if (!s.includes(" ")) return s.length;

  let count = 0;
  let pointer = s.length - 1;

  while (true) {
    if (s[pointer] !== " ") count++;
    else break;
    pointer--;
  }

  console.log(count);
  return count;
}

lengthOfLastWord("luffy is still joyboy");
lengthOfLastWord("   fly me   to   the moon  ");

export default lengthOfLastWord;

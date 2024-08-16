function canConstruct(ransomNote: string, magazine: string): boolean {
  const counter: Record<string, number> = {};

  for (let i = 0; i < magazine.length; i++)
    counter[magazine[i]] = counter[magazine[i]] + 1 || 1;

  for (let j = 0; j < ransomNote.length; j++) {
    if (!counter[ransomNote[j]]) return false;
    counter[ransomNote[j]] -= 1;
  }

  return true;
}

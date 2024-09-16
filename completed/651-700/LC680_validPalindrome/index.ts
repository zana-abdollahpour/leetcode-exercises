function validPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  let deletionCount = 0;

  while (left < right) {
    if (s[left] !== s[right]) {
      let rigthEqual = s[left] === s[right - 1];
      let leftEqual = s[left + 1] === s[right];

      if (!leftEqual && !rigthEqual) return false;

      if (leftEqual && !rigthEqual) {
        deletionCount++;
        left++;
      }

      if (!leftEqual && rigthEqual) {
        deletionCount++;
        right--;
      }
    }

    if (deletionCount > 1) return false;

    left++;
    right--;
  }

  return true;
}

// FP, notSorted
/* function nextGreatestLetter(letters: string[], target: string): string {
  const firstGreater = letters.findIndex((ltr) => ltr > target);
  const rangeToCheck = letters.slice(firstGreater);
  const result = rangeToCheck.reduce(
    (res, ltr) => (ltr < res && ltr !== target ? ltr : res),
    letters[firstGreater] || letters[0]
  );

  return result;
} */

// Imperative, notSorted
/* function nextGreatestLetter(letters: string[], target: string): string {
  const initialChecker = "zz";
  let result = initialChecker;

  for (let i = 0; i < letters.length; i++) {
    const curLetter = letters[i];
    const isSmallerThanResult = curLetter < result;
    const isBiggerthanTarget = curLetter > target;
    const isNotTarget = curLetter !== target;
    const isResult = isSmallerThanResult && isBiggerthanTarget && isNotTarget;
    if (isResult) result = curLetter;
  }

  return result === initialChecker ? letters[0] : result;
} */

// Imperative, sorted
function nextGreatestLetter(letters: string[], target: string): string {
  let left = 0;
  let right = letters.length;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (letters[mid] > target) right = mid;
    else left = mid + 1;
  }

  return letters[left % letters.length];
}

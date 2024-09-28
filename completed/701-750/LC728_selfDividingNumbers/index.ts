const isSelfDividing = (num: number) => {
  const numString = num.toString();
  for (let i = 0; i < numString.length; i++) {
    const cur = +numString[i];
    if (cur === 0 || num % cur !== 0) return false;
  }
  return true;
};

function selfDividingNumbers(left: number, right: number): number[] {
  const res: number[] = [];

  for (let i = left; i <= right; i++) if (isSelfDividing(i)) res.push(i);

  return res;
}

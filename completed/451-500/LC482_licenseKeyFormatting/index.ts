function licenseKeyFormatting(s: string, k: number): string {
  let count = 0;
  let temp = "";
  let res = "";

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "-") continue;
    temp = s[i].toUpperCase() + temp;
    count++;

    if (count === k) {
      temp = "-" + temp;
      res = temp + res;
      count = 0;
      temp = "";
    }
  }

  let finalRes = temp + res;
  if (finalRes[0] === "-") finalRes = finalRes.slice(1);

  return finalRes;
}

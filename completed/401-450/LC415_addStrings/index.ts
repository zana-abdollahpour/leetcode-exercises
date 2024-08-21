function addStrings(num1: string, num2: string): string {
  const maxLength = Math.max(num1.length, num2.length) + 1;
  num1 = num1.padStart(maxLength, "0");
  num2 = num2.padStart(maxLength, "0");

  let radix = 0;
  let sumArr: string[] = Array.from({ length: maxLength }, () => "");

  for (let i = sumArr.length - 1; i >= 0; i--) {
    const current = Number(num1[i]) + Number(num2[i]) + radix;
    if (current > 9) {
      sumArr[i] = current.toString()[1];
      radix = 1;
    } else {
      sumArr[i] = current.toString()[0];
      radix = 0;
    }
  }

  sumArr = sumArr[0] === "0" ? sumArr.slice(1) : sumArr;

  return sumArr.join("");
}

const findComplement = (num: number): number => {
  const binNum = num.toString(2).split("");
  const flipped = binNum.map((int) => (int === "0" ? "1" : "0")).join("");
  return parseInt(flipped, 2);
};

// const findComplement = (num: number): number =>
//   ~num & ((1 << num.toString(2).length) - 1);

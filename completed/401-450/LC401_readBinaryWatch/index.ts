function readBinaryWatch(turnedOn: number): string[] {
  const times = [];

  const countOnes = (num: number) => num.toString(2).split("1").length - 1;

  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      if (countOnes(h) + countOnes(m) === turnedOn) {
        times.push(`${h}:${String(m).padStart(2, "0")}`);
      }
    }
  }

  return times;
}

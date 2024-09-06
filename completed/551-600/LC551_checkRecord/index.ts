// const checkRecord = (s: string): boolean =>
//   !s.includes("LLL") && s.indexOf("A") === s.lastIndexOf("A");

const enum Status {
  Absent = "A",
  Late = "L",
  Present = "P",
}

function checkRecord(s: string): boolean {
  let abs = 0;
  let late = 0;

  for (let i = 0; i < s.length; i++) {
    const curStatus = s[i];
    if (curStatus === Status.Absent) {
      if (++abs >= 2) return false;
      late = 0;
    } else if (curStatus === Status.Late) {
      if (++late >= 3) return false;
    } else late = 0;
  }

  return true;
}

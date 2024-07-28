function convertToTitle(columnNumber: number): string {
  let result: string = "";
  let remainder: number;

  while (columnNumber > 0) {
    remainder = columnNumber % 26 || 26;
    result = String.fromCharCode(remainder + 64) + result;
    columnNumber = (columnNumber - remainder) / 26;
  }
  return result;
}

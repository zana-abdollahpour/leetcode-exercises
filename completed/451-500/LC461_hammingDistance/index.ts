function hammingDistance(x: number, y: number): number {
  let xBin = x.toString(2);
  let yBin = y.toString(2);

  const maxLength = Math.max(xBin.length, yBin.length);
  xBin = xBin.padStart(maxLength, "0");
  yBin = yBin.padStart(maxLength, "0");

  let diff = 0;
  for (let i = 0; i < maxLength; i++) {
    if (xBin[i] !== yBin[i]) diff++;
  }

  return diff;
}

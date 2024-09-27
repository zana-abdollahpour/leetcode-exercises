function isOneBitCharacter(bits: number[]): boolean {
  if (bits.length < 2 || bits[bits.length - 2] === 0) return true;

  for (let i = 0; i < bits.length - 1; i++) {
    if (i === bits.length - 2) return false;
    if (bits[i] === 1) i++;
  }
  return true;
}

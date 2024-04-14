function addBinary(a: string, b: string): string {
  // BigInt solution
  return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
}

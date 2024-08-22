function arrangeCoins(n: number): number {
  let count: number = 0;
  for (let i = 1; i <= n; i++) {
    if (n - i >= 0) {
      n -= i;
      count++;
    } else break;
  }
  return count;
}

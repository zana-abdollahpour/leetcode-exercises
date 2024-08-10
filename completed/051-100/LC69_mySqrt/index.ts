function mySqrt(x: number): number {
  let btm = 0;
  let top = x;

  while (btm <= top) {
    const mid = Math.floor((btm + top) / 2);
    const sq = mid * mid;
    sq <= x ? (btm = mid + 1) : (top = mid - 1);
  }

  return top;
}

console.log(mySqrt(8));

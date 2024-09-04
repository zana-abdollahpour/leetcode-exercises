// function fib(n: number): number {
//   const memo: Map<number, number> = new Map();
//   memo.set(0, 0);
//   memo.set(1, 1);

//   for (let i = 2; i <= n; i++) {
//     const prev1 = memo.get(i - 1)!;
//     const prev2 = memo.get(i - 2)!;
//     memo.set(i, prev1 + prev2);
//   }

//   return memo.get(n)!;
// }

function fib(n: number): number {
  const memo = new Map<number, number>();
  memo.set(0, 0);
  memo.set(1, 1);

  function f(num: number): number {
    if (memo.has(num)) return memo.get(num)!;

    const result = f(num - 1) + f(num - 2);
    memo.set(num, result);
    return result;
  }

  return f(n);
}

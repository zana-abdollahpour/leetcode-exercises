function combine(n: number, k: number): number[][] {
  /*   const res: number[][] = [];

  const backtrack = (arr = []) => {
    if (arr.length === k) {
      res.push([...arr]);
      return;
    }

    const maxNum = n - (k - arr.length - 1);

    for (let i = arr[arr.length - 1] + 1 || 1; i <= maxNum; i++) {
      arr.push(i);
      backtrack(arr);
      arr.pop();
    }
  };

  backtrack();
  return res; */

  const res: number[][] = [];
  function dfs(i: number, comb: number[]) {
    if (comb.length === k) {
      res.push([...comb]);
      return;
    }
    if (i >= n) {
      return;
    }

    comb.push(i + 1);
    dfs(i + 1, comb);
    comb.pop();
    dfs(i + 1, comb);
  }
  dfs(0, []);
  return res;
}

export default combine;

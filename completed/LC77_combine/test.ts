import combine from ".";

describe("Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n]. You may return the answer in any order.", () => {
  test("combine(4, 2) should return [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]].", () => {
    expect(combine(4, 2)).toEqual([
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [3, 4],
    ]);
  });

  test("combine(1, 1) should return [[1]].", () => {
    expect(combine(1, 1)).toEqual([[1]]);
  });
});

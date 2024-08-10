import plusOne from ".";

// You are given a large integer represented as an integer array digits, where
// each digits[i] is the ith digit of the integer. The digits are ordered from
// most significant to least significant in left-to-right order. The large
// integer does not contain any leading 0's. Increment the large integer by
// one and return the resulting array of digits.

// describe("It should increment the number by one", () => {
test("plusOne([1,2,3]) => [1,2,4]", () => {
  expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
});
test("plusOne([4,3,2,1]) => [4,3,2,2]", () => {
  expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
});
test("plusOne([9,9]) => [1,0,0]", () => {
  expect(plusOne([9, 9])).toEqual([1, 0, 0]);
});
test("plusOne([8,9,9,9]) => [9,0,0,0]", () => {
  expect(plusOne([8, 9, 9, 9])).toEqual([9, 0, 0, 0]);
});
test("plusOne([9]) => [1,0]", () => {
  expect(plusOne([9])).toEqual([1, 0]);
});
test("plusOne([9,8,9]) => [9,9,0]", () => {
  expect(plusOne([9, 8, 9])).toEqual([9, 9, 0]);
});
test("plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]) => [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]", () => {
  expect(
    plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])
  ).toEqual([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]);
});
// });

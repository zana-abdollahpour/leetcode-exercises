import lengthOfLastWord from ".";

describe("Given a string s consisting of words and spaces, return the length of the last word in the string.", () => {
  test("lengthOfLastWord('   fly me   to   the moon  ') returns 4", () => {
    expect(lengthOfLastWord("   fly me   to   the moon  ")).toEqual(4);
  });

  test("lengthOfLastWord('luffy is still joyboy') returns 6", () => {
    expect(lengthOfLastWord("luffy is still joyboy")).toEqual(6);
  });
});

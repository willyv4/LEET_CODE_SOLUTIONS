// Import the function that finds the first occurrence of a substring in a string
const strStr = require("./findFirstStringIndex"); // Replace with the actual name of your function

describe("strStr", () => {
  test('should return 0 for "sadbutsad" and "sad"', () => {
    expect(strStr("sadbutsad", "sad")).toBe(0);
  });

  test('should return -1 for "leetcode" and "leeto"', () => {
    expect(strStr("leetcode", "leeto")).toBe(-1);
  });

  test('should return 4 for "mississippi" and "issip"', () => {
    expect(strStr("mississippi", "issip")).toBe(4);
  });

  test('should return 3 for "abcsadxyzsad" and "sad"', () => {
    expect(strStr("abcsadxyzsad", "sad")).toBe(3);
  });

  test('should return 0 for "sadness" and "sad"', () => {
    expect(strStr("sadness", "sad")).toBe(0);
  });

  test('should return 9 for "happyandsad" and "sad"', () => {
    expect(strStr("happyandsad", "sad")).toBe(8);
  });

  test('should return -1 for "smile" and "sad"', () => {
    expect(strStr("smile", "sad")).toBe(-1);
  });

  test('should return -1 for an empty haystack and "sad"', () => {
    expect(strStr("", "sad")).toBe(-1);
  });
});

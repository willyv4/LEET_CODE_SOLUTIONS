const { isPossible } = require("./anagramOfPalindrome");

describe("isPossible Function", () => {
  test('"noon" should return true', () => {
    expect(isPossible("noon")).toBe(true);
  });

  test('"racecar" should return true', () => {
    expect(isPossible("racecar")).toBe(true);
  });

  test('"apple" should return false', () => {
    expect(isPossible("apple")).toBe(false);
  });

  test('"aabb" should return true', () => {
    expect(isPossible("aabb")).toBe(true);
  });

  test('"abcdeedcba" should return true', () => {
    expect(isPossible("abcdeedcba")).toBe(true);
  });

  test('"hello" should return false', () => {
    expect(isPossible("hello")).toBe(false);
  });

  test("An empty string should return true", () => {
    expect(isPossible("")).toBe(true);
  });

  test("A single character string should return true", () => {
    expect(isPossible("a")).toBe(true);
  });

  test('"aa" should return true', () => {
    expect(isPossible("aa")).toBe(true);
  });

  test('"aaa" should return true', () => {
    expect(isPossible("aaa")).toBe(true);
  });

  test('"aab" should return true', () => {
    expect(isPossible("aab")).toBe(true);
  });

  test('"aaaaab" should return false', () => {
    expect(isPossible("aaaaab")).toBe(false);
  });

  test('"12321" should return true', () => {
    expect(isPossible("12321")).toBe(true);
  });

  test('"race car" should return true', () => {
    expect(isPossible("race car")).toBe(true);
  });

  test('"A man, a plan, a canal, Panama!" should return true', () => {
    expect(isPossible("A man, a plan, a canal, Panama!")).toBe(true);
  });

  test('"Was it a car or a cat I saw?" should return true', () => {
    expect(isPossible("Was it a car or a cat I saw?")).toBe(true);
  });
});

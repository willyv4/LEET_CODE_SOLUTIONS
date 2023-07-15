const mergeAlternately = require("./mergeAlternately");

test("jackson => frankie === jrsnni", () => {
  expect(mergeAlternately("jackson", "frankie")).toBe("jfarcaknskoine");
});

test("abc => pqr === apbqcr", () => {
  expect(mergeAlternately("abc", "pqr")).toBe("apbqcr");
});

test("ab => pqrs === apbqrs", () => {
  expect(mergeAlternately("ab", "pqrs")).toBe("apbqrs");
});

test("abcd => pq === apbqcd", () => {
  expect(mergeAlternately("abcd", "pq")).toBe("apbqcd");
});

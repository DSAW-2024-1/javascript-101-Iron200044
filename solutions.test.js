const {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
} = require("./solutions.js");

describe("Sum of Two Numbers", () => {
  test("adds 3 + 5 to equal 8", () => {
    expect(sum(3, 5)).toBe(8);
  });

  test("adds -10 + 20 to equal 10", () => {
    expect(sum(-10, 20)).toBe(10);
  });

  test("adds string input to print message", () => {
    const consoleSpy = jest.spyOn(console, "log");
    sum("a", 5);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Los datos de entrada no son adecuados"
    );
  });
});

describe("Factorial of a Number", () => {
  test("factorial of 0 is 1", () => {
    expect(factorial(0)).toBe(1);
  });

  test("factorial of 5 is 120", () => {
    expect(factorial(5)).toBe(120);
  });

  test("factorial of string input to print message", () => {
    const consoleSpy = jest.spyOn(console, "log");
    factorial("a");
    expect(consoleSpy).toHaveBeenCalledWith(
      "Los datos de entrada no son adecuados"
    );
  });
});

describe("Find the Largest Number", () => {
  test("largest number in [3, 5, 10, 2] is 10", () => {
    expect(findLargest([3, 5, 10, 2])).toBe(10);
  });

  test("largest number in [-1, -5, -10, -2] is -1", () => {
    expect(findLargest([-1, -5, -10, -2])).toBe(-1);
  });

  test('largest number in ["a", "b", "c"] to print message', () => {
    const consoleSpy = jest.spyOn(console, "log");
    findLargest(["a", "b", "c"]);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Los datos de entrada no son adecuados"
    );
  });
});

describe("Count Vowels in a String", () => {
  test('count of vowels in "Hello, World!" is 3', () => {
    expect(countVowels("Hello, World!")).toBe(3);
  });

  test('count of vowels in "JavaScript is Awesome" is 8', () => {
    expect(countVowels("JavaScript is Awesome")).toBe(8);
  });

  test("count of vowels in number input to print message", () => {
    const consoleSpy = jest.spyOn(console, "log");
    countVowels(12345);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Los datos de entrada no son adecuados"
    );
  });
});

describe("Check if a Number is Prime", () => {
  test("7 is a prime number", () => {
    expect(isPrime(7)).toBe(true);
  });

  test("10 is not a prime number", () => {
    expect(isPrime(10)).toBe(false);
  });

  test("string input to print message", () => {
    const consoleSpy = jest.spyOn(console, "log");
    isPrime("a");
    expect(consoleSpy).toHaveBeenCalledWith(
      "Los datos de entrada no son adecuados"
    );
  });
});

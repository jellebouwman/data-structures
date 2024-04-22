import { findMissingNumber } from ".";

import { expect, it, describe } from "vitest";

describe("findMissingNumber", () => {
  it("it finds the missing number", () => {
    expect(findMissingNumber([3, 1, 0])).toBe(2);
    expect(findMissingNumber([0])).toBe(1);
    expect(findMissingNumber([])).toBe(0);
    expect(findMissingNumber([9, 2, 4, 5, 6, 7, 1, 0, 3])).toBe(8);
  });

  it("it throws when there are duplicate keys", () => {
    // Gotcha: wrap the function in a function to be able
    // to test for 'toThrowError'
    expect(() => findMissingNumber([0, 0])).toThrowError();
  });
});

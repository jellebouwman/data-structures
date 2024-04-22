import {
  findMissingNumber as implementation1,
  findMissingNumberTwo as implementation2,
} from ".";

import { expect, it, describe } from "vitest";

describe("findMissingNumber. implementation 1", () => {
  it("it finds the missing number", () => {
    expect(implementation1([3, 1, 0])).toBe(2);
    expect(implementation1([0])).toBe(1);
    expect(implementation1([])).toBe(0);
    expect(implementation1([9, 2, 4, 5, 6, 7, 1, 0, 3])).toBe(8);
  });

  it("it throws when there are duplicate keys", () => {
    // Gotcha: wrap the function in a function to be able
    // to test for 'toThrowError'
    expect(() => implementation1([0, 0])).toThrowError();
  });
});

describe("findMissingNumber. implementation 2", () => {
  it("it finds the missing number", () => {
    expect(implementation2([3, 1, 0])).toBe(2);
    expect(implementation2([0])).toBe(1);
    expect(implementation2([])).toBe(0);
    expect(implementation2([9, 2, 4, 5, 6, 7, 1, 0, 3])).toBe(8);
  });
});

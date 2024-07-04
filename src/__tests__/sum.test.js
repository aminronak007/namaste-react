import { sum } from "../utils/Sum";

test("Sum function should calculate the sum of two numbers", () => {
  const result = sum(2, 3);

  // This below line is known as Assertion
  expect(result).toBe(5);
});

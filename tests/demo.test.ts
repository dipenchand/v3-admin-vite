import { describe, expect, it } from "vitest"

/**
 * @description All examples in this file are to demonstrate to you the most basic usage of Vitest
 * @link https://vitest.dev/api
 * @api describe: form a scope
 * @api test/it: defines a set of methods about test expectations, which receives the test name and a function containing the test expectations
 * @api expect: used to create assertions
 * @api toBe: can be used to assert whether primitive types are equal, or whether objects share the same reference
 * @api toEqual: Assert whether the actual value is equal to the received value or has the same structure (if it is an object, compare them recursively)
 */

const author1 = {
  name: "Dipendra",
  email: "gamenic.dipendra@gmail.com",
  url: "https://github.com/gamenic-dipendra"
}

const author2 = {
  name: "Dipendra",
  email: "gamenic.dipendra@gmail.com",
  url: "https://github.com/gamenic-dipendra"
}

describe("Enter the scope name here", () => {
  it("Test basic data types", () => {
    expect(1 + 1).toBe(2)
  })
  it("Test reference type", () => {
    expect(author1).toEqual(author2)
  })
})

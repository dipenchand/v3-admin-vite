/**
 * Config Docs：https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */

export default {
  /** Width of each row */
  printWidth: 120,
  /** Whether to use spaces between parentheses in objects */
  bracketSpacing: true,
  /** No matter how many parameters there are in an arrow function, they must be wrapped in parentheses. */
  arrowParens: "always",
  /** Use of line breaks */
  endOfLine: "auto",
  /** Whether to use single quotes */
  singleQuote: false,
  /** Do not add a comma after the last element of an object or array */
  trailingComma: "none",
  /** Whether to add a semicolon */
  semi: false
}

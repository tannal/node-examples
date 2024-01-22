/**
 * Adds two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
export const add = (a, b) => a + b;

/**
 * Subtracts the subtrahend from the minuend.
 * @param {number} minuend - The number to be subtracted from.
 * @param {number} subtrahend - The number to subtract.
 * @returns {number} The difference between the minuend and subtrahend.
 */
export const subtract = (minuend, subtrahend) => add(minuend, -subtrahend);

/**
 * Multiplies two numbers.
 * @param {number} multiplicand - The first number to multiply.
 * @param {number} multiplier - The second number to multiply.
 * @returns {number} The product of the two numbers.
 */
export const multiply = (multiplicand, multiplier) => {
  let result = 0;

  while (multiplier--) {
    result = add(result, multiplicand);
  }

  return result;
};

/**
 * Divides the dividend by the denominator.
 * @param {number} dividend - The number to be divided.
 * @param {number} denominator - The number to divide by.
 * @returns {number} The quotient of the division.
 */
export const divide = (dividend, denominator) => {
  return dividend / denominator;
};

/**
 * Calculates the sum of multiple numbers.
 * @param {...number} numbers - The numbers to be summed.
 * @returns {number} The sum of the numbers.
 */
export const sum = (...numbers) => {
  return numbers.reduce((total, n) => total + n, 0);
};

/**
 * Calculates the average of multiple numbers.
 * @param {...number} numbers - The numbers to be averaged.
 * @returns {number} The average of the numbers.
 */
export const average = (...numbers) => {
  return divide(sum(...numbers), numbers.length);
};
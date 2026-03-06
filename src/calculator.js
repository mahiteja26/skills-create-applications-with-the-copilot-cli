/**
 * Node.js CLI Calculator App
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 */

/**
 * Addition operation
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtraction operation
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The difference of a minus b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplication operation
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Division operation
 * @param {number} a - First number (dividend)
 * @param {number} b - Second number (divisor)
 * @returns {number} The quotient of a divided by b
 * @throws {Error} If attempting to divide by zero
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

/**
 * Main calculator function that processes operations
 * @param {number} firstNumber - The first operand
 * @param {string} operation - The operation to perform (+, -, *, /)
 * @param {number} secondNumber - The second operand
 * @returns {number} The result of the operation
 * @throws {Error} If the operation is not recognized
 */
function calculate(firstNumber, operation, secondNumber) {
  switch (operation) {
    case '+':
      return add(firstNumber, secondNumber);
    case '-':
      return subtract(firstNumber, secondNumber);
    case '*':
      return multiply(firstNumber, secondNumber);
    case '/':
      return divide(firstNumber, secondNumber);
    default:
      throw new Error(`Unknown operation: ${operation}. Supported operations are: +, -, *, /`);
  }
}

// Export functions for use in CLI or as a module
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  calculate
};

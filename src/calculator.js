/**
 * Node.js CLI Calculator App
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulo (%)
 * - Power (^)
 * - Square Root (sqrt)
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
 * Modulo operation
 * @param {number} a - The dividend
 * @param {number} b - The divisor
 * @returns {number} The remainder of a divided by b
 * @throws {Error} If attempting modulo by zero
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Cannot perform modulo by zero');
  }
  return a % b;
}

/**
 * Power operation (exponentiation)
 * @param {number} a - The base number
 * @param {number} b - The exponent
 * @returns {number} The result of a raised to the power of b
 */
function power(a, b) {
  return Math.pow(a, b);
}

/**
 * Square root operation
 * @param {number} a - The number to take the square root of
 * @returns {number} The square root of a
 * @throws {Error} If attempting to take square root of negative number
 */
function squareRoot(a) {
  if (a < 0) {
    throw new Error('Cannot take square root of a negative number');
  }
  return Math.sqrt(a);
}

/**
 * Main calculator function that processes operations
 * @param {number} firstNumber - The first operand
 * @param {string} operation - The operation to perform (+, -, *, /, %, ^, sqrt)
 * @param {number} secondNumber - The second operand (not used for sqrt)
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
    case '%':
      return modulo(firstNumber, secondNumber);
    case '^':
      return power(firstNumber, secondNumber);
    case 'sqrt':
      return squareRoot(firstNumber);
    default:
      throw new Error(`Unknown operation: ${operation}. Supported operations are: +, -, *, /, %, ^, sqrt`);
  }
}

// Export functions for use in CLI or as a module
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
  calculate
};

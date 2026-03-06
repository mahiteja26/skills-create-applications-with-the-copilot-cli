const { add, subtract, multiply, divide, calculate } = require('../calculator');

describe('Calculator - Basic Arithmetic Operations', () => {

  describe('Addition (+)', () => {
    test('should add two positive numbers: 2 + 3 = 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add positive and negative numbers: 10 + (-5) = 5', () => {
      expect(add(10, -5)).toBe(5);
    });

    test('should add two negative numbers: -3 + (-2) = -5', () => {
      expect(add(-3, -2)).toBe(-5);
    });

    test('should add zero to a number: 7 + 0 = 7', () => {
      expect(add(7, 0)).toBe(7);
    });

    test('should add decimals: 2.5 + 3.7 = 6.2', () => {
      expect(add(2.5, 3.7)).toBeCloseTo(6.2);
    });

    test('should add large numbers: 1000000 + 2000000 = 3000000', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  describe('Subtraction (-)', () => {
    test('should subtract two positive numbers: 10 - 4 = 6', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract resulting in negative: 5 - 10 = -5', () => {
      expect(subtract(5, 10)).toBe(-5);
    });

    test('should subtract negative numbers: 10 - (-5) = 15', () => {
      expect(subtract(10, -5)).toBe(15);
    });

    test('should subtract zero: 8 - 0 = 8', () => {
      expect(subtract(8, 0)).toBe(8);
    });

    test('should subtract same numbers: 5 - 5 = 0', () => {
      expect(subtract(5, 5)).toBe(0);
    });

    test('should subtract decimals: 10.5 - 3.2 = 7.3', () => {
      expect(subtract(10.5, 3.2)).toBeCloseTo(7.3);
    });
  });

  describe('Multiplication (*)', () => {
    test('should multiply two positive numbers: 45 * 2 = 90', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply positive by negative: 5 * (-3) = -15', () => {
      expect(multiply(5, -3)).toBe(-15);
    });

    test('should multiply two negative numbers: (-4) * (-6) = 24', () => {
      expect(multiply(-4, -6)).toBe(24);
    });

    test('should multiply by zero: 100 * 0 = 0', () => {
      expect(multiply(100, 0)).toBe(0);
    });

    test('should multiply by one: 42 * 1 = 42', () => {
      expect(multiply(42, 1)).toBe(42);
    });

    test('should multiply decimals: 2.5 * 4 = 10', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should multiply large numbers: 1000 * 500 = 500000', () => {
      expect(multiply(1000, 500)).toBe(500000);
    });
  });

  describe('Division (/)', () => {
    test('should divide two positive numbers: 20 / 5 = 4', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide resulting in decimal: 10 / 3', () => {
      expect(divide(10, 3)).toBeCloseTo(3.333333, 5);
    });

    test('should divide positive by negative: 20 / (-4) = -5', () => {
      expect(divide(20, -4)).toBe(-5);
    });

    test('should divide two negative numbers: (-20) / (-5) = 4', () => {
      expect(divide(-20, -5)).toBe(4);
    });

    test('should divide zero by a number: 0 / 5 = 0', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw error when dividing negative by zero', () => {
      expect(() => divide(-5, 0)).toThrow('Cannot divide by zero');
    });

    test('should divide decimals: 7.5 / 2.5 = 3', () => {
      expect(divide(7.5, 2.5)).toBe(3);
    });
  });

  describe('Main calculate() function', () => {
    test('should calculate addition: calculate(2, "+", 3) = 5', () => {
      expect(calculate(2, '+', 3)).toBe(5);
    });

    test('should calculate subtraction: calculate(10, "-", 4) = 6', () => {
      expect(calculate(10, '-', 4)).toBe(6);
    });

    test('should calculate multiplication: calculate(45, "*", 2) = 90', () => {
      expect(calculate(45, '*', 2)).toBe(90);
    });

    test('should calculate division: calculate(20, "/", 5) = 4', () => {
      expect(calculate(20, '/', 5)).toBe(4);
    });

    test('should throw error for unknown operation', () => {
      expect(() => calculate(5, '%', 3)).toThrow(/Unknown operation/);
    });

    test('should throw error for unsupported operator "&"', () => {
      expect(() => calculate(10, '&', 2)).toThrow(/Unknown operation/);
    });

    test('should handle complex calculation chains', () => {
      // (2 + 3) * 2 = 10, then 10 - 4 = 6
      expect(calculate(calculate(2, '+', 3), '*', 2)).toBe(10);
      expect(calculate(10, '-', 4)).toBe(6);
    });
  });

  describe('Edge Cases and Special Scenarios', () => {
    test('should handle operations with very large numbers', () => {
      expect(add(1e10, 2e10)).toBe(3e10);
    });

    test('should handle operations with very small numbers', () => {
      expect(multiply(0.0001, 0.0001)).toBeCloseTo(0.00000001);
    });

    test('should maintain precision with multiple operations', () => {
      const result = divide(multiply(10, 3), 2);
      expect(result).toBe(15);
    });

    test('should handle negative zero correctly', () => {
      expect(subtract(0, 0)).toBe(0);
    });

    test('should handle operations resulting in infinity-like values', () => {
      const result = divide(1, 1000000);
      expect(result).toBeGreaterThan(0);
    });
  });
});

import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from './main.js';

describe('capitalize function', () => {
  test('The first letter is always capitalized', () => {
    const testCases = [
      { input: 'hello', output: 'Hello' },
      { input: 'good', output: 'Good' },
      { input: 'Food', output: 'Food' },
    ];
    for (const testCase of testCases) {
      expect(capitalize(testCase.input)).toBe(testCase.output);
    }
  });
});

describe('reverseString function', () => {
  test('Returns reversed string', () => {
    const testCases = [
      { input: 'hello', output: 'olleh' },
      { input: 'Advantage', output: 'egatnavdA' },
      { input: 'racecar', output: 'racecar' },
    ];
    for (const testCase of testCases) {
      expect(reverseString(testCase.input)).toBe(testCase.output);
    }
  });
});

describe('calculator functions', () => {
  test('Adds correctly', () => {
    const testCases = [
      { num1: 2, num2: 2, output: 4 },
      { num1: 25, num2: 7, output: 32 },
    ];
    for (const testCase of testCases) {
      expect(calculator.add(testCase.num1, testCase.num2)).toBeCloseTo(
        testCase.output
      );
    }
  });

  test('Substracts correctly', () => {
    const testCases = [
      { num1: 2, num2: 2, output: 0 },
      { num1: 25, num2: 7, output: 18 },
    ];
    for (const testCase of testCases) {
      expect(calculator.subtract(testCase.num1, testCase.num2)).toBeCloseTo(
        testCase.output
      );
    }
  });

  test('Divides correctly', () => {
    const testCases = [
      { num1: 60, num2: 10, output: 6 },
      { num1: 65, num2: 3, output: 21.666 },
    ];
    for (const testCase of testCases) {
      expect(calculator.divide(testCase.num1, testCase.num2)).toBeCloseTo(
        testCase.output
      );
    }
  });

  test('Multiplies correctly', () => {
    const testCases = [
      { num1: 60, num2: 3, output: 180 },
      { num1: 33.69, num2: 4.25, output: 143.1825 },
    ];
    for (const testCase of testCases) {
      expect(calculator.multiply(testCase.num1, testCase.num2)).toBeCloseTo(
        testCase.output
      );
    }
  });
});

describe('caesarCipher function', () => {
  test('Wrapping from z to a works', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('XYZ', 3)).toBe('ABC');
  });

  test('Case preservation works', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  });

  test('Punctuation remains unchanged', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });
});

describe('analyzeArray function', () => {
  test('Array analyzed correctly', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });

    expect(analyzeArray([4, 6, 2, 3])).toStrictEqual({
      average: 3.75,
      min: 2,
      max: 6,
      length: 4,
    });
  });
});

const {stringLength, reverseString} = require('./index');
const {Calculator} = require('./calculator.js');

test('Araf string length', () => {
  expect(stringLength('adfgjlppi')).toBe(9);
});

test('Reverse the string', () => {
  expect(reverseString("need")).toBe('deen');
})

describe('my calculator', () => {
  const CalculatorInstance = new Calculator();
test('add numbers', () => {
  expect(CalculatorInstance.add(5,4)).toBe(9);
  expect(CalculatorInstance.add(1,4)).toBe(5);
  expect(CalculatorInstance.add(15,0)).toBe(15);
});

test(' substract numbers', () => {
  expect(CalculatorInstance.substract(5,4)).toBe(1);
  expect(CalculatorInstance.substract(1,4)).toBe(-3);
  expect(CalculatorInstance.substract(40,0)).toBe(40);
});

test('multiply numbers', () => {
  expect(CalculatorInstance.multiply(5,4)).toBe(20);
  expect(CalculatorInstance.multiply(1,4)).toBe(4);
  expect(CalculatorInstance.multiply(0,4)).toBe(0);
});

test('divide numbers', () => {
  expect(CalculatorInstance.divide(10, 2)).toBe(5);
  expect(() => CalculatorInstance.divide(10, 0)).toThrow('Division by zero is not allowed');
  expect(CalculatorInstance.divide(55, 5)).toBe(11);
})
})
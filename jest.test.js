
const {stringLength, reverseString} = require('./index');

test('Araf string length', () => {
  expect(stringLength('adfgjlppi')).toBe(9);
});

test('Reverse the string', () => {
  expect(reverseString("need")).toBe('deen');
})
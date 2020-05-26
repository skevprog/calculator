import {
  add, substract, divide, multiply, parseToNumber,
} from './index';

test('Parse String type to Number type', () => {
  expect(parseToNumber('3')).toBe(3);
});

test('Adds 1 + 2 to Equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('Substract 3 - 2 to Equal 1', () => {
  expect(substract(3, 2)).toBe(1);
});

test('Divide 6 / 2 to Equal 3', () => {
  expect(divide(6, 2)).toBe(3);
});

test('Multiply 4 x 2 to Equal 8', () => {
  expect(multiply(4, 2)).toBe(8);
});

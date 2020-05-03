/* eslint-disable radix */

const add = (a, b) => a + b;

const substract = (a, b) => a - b;

const divide = (a, b) => a / b;

const multiply = (a, b) => a * b;

const calculation = (operator, a, b) => {
  const valueOne = parseInt(a);
  const valueTwo = parseInt(b);
  // Avoid executing every operation using common object literal approach
  const Operations = {
    '*': () => multiply(valueOne, valueTwo),
    '+': () => add(valueOne, valueTwo),
    '-': () => substract(valueOne, valueTwo),
    '/': () => divide(valueOne, valueTwo),
  };

  return Operations[operator]();
};


export default calculation;

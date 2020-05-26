const add = (a, b) => a + b;

const substract = (a, b) => a - b;

const divide = (a, b) => a / b;

const multiply = (a, b) => a * b;

const parseToNumber = (value) => {
  if (typeof value === 'string') {
    return value.includes('.') ? parseFloat(value) : parseInt(value, 0);
  }
  return value;
};

const calculation = (operator, a, b) => {
  if (!operator) return '';
  const valueOne = parseToNumber(a);
  const valueTwo = parseToNumber(b);
  // Avoid executing every operation using common object literal approach
  const Operations = {
    '*': () => multiply(valueOne, valueTwo),
    '+': () => add(valueOne, valueTwo),
    '-': () => substract(valueOne, valueTwo),
    '/': () => divide(valueOne, valueTwo),
  };
  return Operations[operator]();
};


export {
  add, substract, divide, multiply, parseToNumber, calculation,
};

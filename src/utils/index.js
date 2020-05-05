const add = (a, b) => a + b;

const substract = (a, b) => a - b;

const divide = (a, b) => a / b;

const multiply = (a, b) => a * b;

const calculation = (operator, a, b) => {
  if (!operator) return '';
  const valueOne = a.includes('.') ? parseFloat(a) : parseInt(a, 0);
  const valueTwo = b.includes('.') ? parseFloat(b) : parseInt(b, 0);
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

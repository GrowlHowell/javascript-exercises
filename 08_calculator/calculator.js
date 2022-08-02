const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	const initialValue = 0;
  const sumWithInitial = array.reduce((a, b) => a + b, initialValue);
  return sumWithInitial;
};

const multiply = function(array) {
  const multiplyArray = array.reduce((a, b) => a * b);
  return multiplyArray;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
	if (a == 0 || a == 1) {
    return 1;
  }
  return a * factorial(a-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

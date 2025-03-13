const add = function(a, b) {
	let sum = Math.round(a + b)
  return  sum;
};

const subtract = function(a, b) {
	let difference = Math.round(a - b)
  return difference;
};

const sum = function(numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
 
};

const multiply = function( numbers) {
  
  return numbers.reduce((accumulator, currentValue) =>  accumulator * currentValue, 1);

};

const power = function(base, exponent) {
  let toPower = Math.pow(base, exponent)
  return toPower;

	
};

const factorial = function(n) {
  if (n < 0) return "Error";
  let result = 1;
  for(let i = 1; i <= n; i++) {
    result *= i
  }
  return result;
	
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

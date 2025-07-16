const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(numArray) {
  if (numArray.length == 0)
     return 0;

  let tally = 0;
  numArray.forEach(addArray)

  function addArray(value){
    tally += value;
  }

  return tally;
	
};

const multiply = function(numArray) {
  let tally = 1;

  numArray.forEach(multArray)

  function multArray(value) {
    tally *= value;
  }

  return tally;

};

const power = function(a, b) {
  let tally = a;

  for (let i=b-1; i>0; i--){
    tally *= a;
  }
  
  return tally;
	
};

const factorial = function(a) {
  tally = 1

  for (let i = a; i > 0; i--){
    tally *= i
  }

  return tally;
	
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

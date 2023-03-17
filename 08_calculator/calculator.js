const add = function() {
  
  return arguments[0] + arguments[1];
};

const subtract = function(number1, number2) {

  return number1 - number2;
	
};

const sum = function(array) {
  console.log(array.length);
  let out=0;  
  if(array.length==0 ){
    return 0;
  }    
  else{
    for (let i=0;i<array.length;i++){
      out+=array[i];
    }
    return out;
  }
	
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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

const add = function() {
  
  return arguments[0] + arguments[1];
};

const subtract = function(number1, number2) {

  return number1 - number2;
	
};

const sum = function(array) {
  
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

const multiply = function(array) {
  let out=1;  
  if(array.length==0 ){
    return 0;
  }    
  else{
    for (let i=0;i<array.length;i++){
      out*=array[i];
    }
    return out;
  }
	
};

const power = function(number1,number2) {
	let out= Math.pow(number1,number2);
  return out;
};

const factorial = function(number) {
  if(number==0 || number ==1)
  {
    return 1;
  }
  else
  {
    return number*factorial(number-1)
  }
	
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

const convertToCelsius = function(temperature) {
  let out=(Math.round((temperature-32)*50/9))/10;  
  return out;
};

const convertToFahrenheit = function(temperature) {
  
  let out=(Math.round(((temperature*9/5)+32)*10))/10;  
  return out;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

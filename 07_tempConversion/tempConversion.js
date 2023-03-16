const convertToCelsius = function(temperature) {
  let out=(Math.round((temperature-32)*50/9))/10;  

  return out;
};

const convertToFahrenheit = function(temperature) {
  let out=temperature
  return out;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

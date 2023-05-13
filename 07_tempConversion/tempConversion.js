const convertToCelsius = function(temp) {
  let celcius = 5/9*(temp-32)
  if(celcius%1 == 0){
    return celcius
  }
  celcius = +celcius.toFixed(1)
  return celcius
};

const convertToFahrenheit = function(temp) {
  let far = temp*(9/5) + 32
  if(far%1 == 0){
    return far
  }
  far = +far.toFixed(1)
  return far
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

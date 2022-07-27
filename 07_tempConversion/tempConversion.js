const ftoc = function(tempF) {
  let newTemp = (tempF - 32) * .5556;
  return parseFloat(newTemp.toFixed(1));
};

const ctof = function(tempC) {
  let newTemp = (tempC * 1.8) + 32;
  return parseFloat(newTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

const reverseString = function(string) {
    let stringArray = string.split('');
    stringArray.reverse();
    let newString = stringArray.join('');
    return newString;
};

// Do not edit below this line
module.exports = reverseString;

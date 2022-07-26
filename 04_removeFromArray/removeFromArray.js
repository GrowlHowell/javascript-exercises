const removeFromArray = function(array, ...args) {
    let newArray = array.filter(i => !args.includes(i));
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

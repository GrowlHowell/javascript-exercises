const palindromes = function(a) {
    const garbage = /[\W_]/g;
    const aLower = a.toLowerCase().replace(garbage, '');
    const aReverse = aLower.split('').reverse().join('');
    return aLower === aReverse;
};

// Do not edit below this line
module.exports = palindromes;

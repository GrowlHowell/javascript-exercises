const fibonacci = function(num) {
    let array = [0, 1];
    let num1 = 0;
    let num2 = 1;
    if (num < 0 || typeof num === String) {
        return "OOPS";
    }
    for (let i = 0; i <= num; i++) {
        array.push(array[num1] + array[num2]);
        num1 += 1;
        num2 += 1;
    }
    return array[num];
};

// Do not edit below this line
module.exports = fibonacci;

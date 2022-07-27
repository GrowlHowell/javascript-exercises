const sumAll = function(a, b) {
    let sum;
    if ((typeof a) !== "number" || (typeof b) !== "number") {
        return "ERROR";
    }
    if (a < 0 || b < 0) {
        return "ERROR";
    }
    if (a < b) {
        sum = b;
        for (i = a; i < b; i++) {
            sum += i;
        }
    } else {
        sum = a;
        for (i = b; i < a; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (nums) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    return sum;
};

const multiply = function (nums) {
    let product = 1;

    for (let i = 0; i < nums.length; i++) {
        product *= nums[i];
    }

    return product;
};

const power = function (base, exponent) {
    return Math.pow(base, exponent);
};

const factorial = function (num) {
    if (num === 0) return 1;

    let answer = 1;

    for (let i = num; i > 0; i--) {
        answer *= i;
    }

    return answer;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};

const reverseString = function (word) {
    let letters = [];

    for (let i = word.length - 1; i >= 0; i--) {
        letters.push(word[i]);
    }

    return letters.join("");
};
reverseString("hello");
// Do not edit below this line
module.exports = reverseString;

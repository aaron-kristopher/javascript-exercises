const palindromes = function (sentence) {
    let letters = sentence
        .toLowerCase()
        .split("")
        .filter((letter) => letter.match(/[a-z0-9]/i));

    return letters.join("") === letters.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;

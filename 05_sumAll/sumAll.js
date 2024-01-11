const sumAll = function (numOne, numTwo) {
    const firstTerm = numOne < numTwo ? numOne : numTwo;
    const lastTerm = numOne > numTwo ? numOne : numTwo;

    if (
        isNaN(firstTerm) ||
        isNaN(lastTerm) ||
        firstTerm < 0 ||
        lastTerm < 0 ||
        typeof firstTerm != "number" ||
        typeof lastTerm != "number"
    )
        return "ERROR";

    // number of integers is needed for the formula
    let numOfIntegers = lastTerm - (firstTerm - 1);

    // Used a formula to add all numbers within a range instead of a loop
    // Takes constant time O(1) to add all sum
    return (numOfIntegers * (firstTerm + lastTerm)) / 2; // Formula to get sum of a Range: sum = n(a + l) / 2
};

// Removes arguments that cannot be used in range
// Do not edit below this line
module.exports = sumAll;

const convertToCelsius = function (farenheit) {
    // Formula: °C = 5/9 × (°F - 32)
    let celcius = (5 / 9) * (farenheit - 32);
    return Math.round(celcius * 10) / 10;
};

const convertToFahrenheit = function (celcius) {
    // Formula: °F = (°C × 9/5) + 32
    let farenheit = (celcius * (9 / 5) + 32).toFixed(1);
    return Math.round(farenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit,
};

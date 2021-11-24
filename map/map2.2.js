const floatNumbers = ["2.5", "5.9", "100.33"];

const result = floatNumbers.map((element) => {
    return parseFloat(element);
});
console.log(result);
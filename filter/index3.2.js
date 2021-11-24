const numbers = [1, 100, 67, -5, 6784, 356, 200];
const greaterThanLessThan = (array, number1, number2) => {
    return array.filter((num) => {
        return num > number1 && num < number2;
    });
};
console.log(greaterThanLessThan(numbers, 100, 1000));
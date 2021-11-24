const numbers = [1, 100, 67, -5, 6784, 356, 200];

const getNumbers = (array, number) => {
    const result = array.filter((element) => {
        return element > number;
});
    return result;
};
console.log(getNumbers(numbers, 67));
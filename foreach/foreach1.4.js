const numbers = [1, 2, 3, 4, 5];
numbers.forEach((element ,index) => {
    numbers[index] = element * 2;

});
console.log(numbers);
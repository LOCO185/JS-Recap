const ToNumber = function(array) {
    const result = [];
    array.forEach((element, index) => {
        result.push(index + 1);
    });
    return result;
}
console.log(ToNumber(["one", "two", "three", "four", "five"]));
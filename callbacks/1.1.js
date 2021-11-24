const goodEvening = (name) => {
    console.log(`Good evening ${name}`);
}
const quoatation = (name, callback) => {
    const result = `"${name}"`;
    if (typeof callback === "function") {
        callback(result);
    } else {
        return result;
    }
};
console.log(quoatation('Jawad',goodEvening));
function sum(arr) {
    let sum = 0;
    arr.forEach(curValue => {
        sum += curValue;
    });
    return sum;
}
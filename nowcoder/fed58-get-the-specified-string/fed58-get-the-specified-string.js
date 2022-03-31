function captureThreeNumbers(str) {
    let arr = str.match(/\d{3}/);
    if (arr) {
        return arr[0];
    }
    else {
        return false;
    }
}
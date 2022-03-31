function findAllOccurrences(arr, target) {
    let ans = [];
    arr.forEach((currentValue, index) => {
        if (currentValue === target) {
            ans.push(index);
        }
    });
    return ans;
}
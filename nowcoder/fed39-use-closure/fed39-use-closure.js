function makeClosures(arr, fn) {
    let ans = new Array();
    for (let i = 0; i < arr.length; ++i) {
        ans.push(function () {
            return fn(arr[i]);
        })
    }
    return ans;
}
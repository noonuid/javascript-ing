var _fib = (function (n) {
    var memory = [0, 1];
    return function (n) {
        for (var i = memory.length; i <= n; i++) {
            memory[i] = memory[i - 1] + memory[i - 2];
        }
        return memory;
    };
})();

var fibonacci = function (n) {
    return _fib(n)[n];
}

# 斐波那契数列

## 题目描述

用 JavaScript 实现斐波那契数列函数,返回第n个斐波那契数。 f(1) = 1, f(2) = 1 等

## solution

### 常规

```javascript
function fibonacci(n) {
    if(n===1||n===2){
        return 1;
    }
    return fibonacci(n-1)+fibonacci(n-2);
}
```

### 闭包

```javascript
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
```


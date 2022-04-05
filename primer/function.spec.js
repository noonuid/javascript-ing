import { describe, expect, test } from '@jest/globals';

describe("function", () => {
    test("example declaration", () => {
        // function name(parameter1, parameter2, ...parameterN) {
        // ...body...
        // }
        // 例如：
        function showMessage() {
            console.log('Hello everyone!');
        }

        showMessage();
        showMessage();
    });

    test("example local variable", () => {
        // 在函数中声明的变量只在该函数内部可见。
        // 例如：
        function showMessage() {
            let message = "Hello, I'm JavaScript!"; // 局部变量

            console.log(message);
        }

        showMessage(); // Hello, I'm JavaScript!

        // console.log(message); // <-- 错误！变量是函数的局部变量
    });

    test("example outer variable", () => {
        // 函数也可以访问外部变量，例如：
        let userName = 'John';

        function showMessage() {
            let message = 'Hello, ' + userName;
            console.log(message);
        }

        showMessage(); // Hello, John
    });

    test("example parameter", () => {
        // 我们可以通过参数将任意数据传递给函数。

        // 在如下示例中，函数有两个参数：from 和 text。
        function showMessage(from, text) { // 参数：from 和 text
            console.log(from + ': ' + text);
        }

        showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
        showMessage('Ann', "What's up?"); // Ann: What's up? (**)
    });

    test("example returning a value", () => {
        // 函数可以将一个值返回到调用代码中作为结果。
        function sum(a, b) {
            return a + b;
        }

        let result = sum(1, 2);
        console.log(result); // 3
    });
});
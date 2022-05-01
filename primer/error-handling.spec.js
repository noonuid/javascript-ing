import { describe, expect, test } from '@jest/globals';

describe("error handling", () => {
    test("try...catch", () => {
        {
            // 没有 error 的例子：显示 console.log(1) 和(2)：
            try {
                console.log('Start of try runs');  // (1) <--

                // ...这里没有 error

                console.log('End of try runs');   // (2) <--
            } catch (err) {
                console.log('Catch is ignored, because there are no errors'); // (3)
            }
        }
        {
            // 包含 error 的例子：显示(1) 和(3) 行的 console.log 中的内容：
            try {
                console.log('Start of try runs');  // (1) <--

                lalala; // Error，变量未定义！

                console.log('End of try (never reached)');  // (2)
            } catch (err) {
                console.log(`Error has occurred!`); // (3) <--
            }
        }
    });

    test("error object", () => {
        try {
            lalala; // error, variable is not defined!
        } catch (err) {
            console.log(err.name); // ReferenceError
            console.log(err.message); // lalala is not defined
            console.log(err.stack); // ReferenceError: lalala is not defined at (...call stack)

            // 也可以将一个 error 作为整体显示出来as a whole
            // Error 信息被转换为像 "name: message" 这样的字符串
            console.log(err); // ReferenceError: lalala is not defined
        }
    });

    test("throwing our own errors", () => {
        let json = '{ "age": 30 }'; // 不完整的数据

        try {
            let user = JSON.parse(json); // <-- 没有 error

            if (!user.name) {
                throw new SyntaxError("Incomplete data: no name"); // (*)
            }

            console.log(user.name);
        } catch (err) {
            console.log("JSON Error: " + err.message); // JSON Error: Incomplete data: no name
        }
    });

    test("rethrowing", () => {
        let json = '{ "age": 30 }'; // 不完整的数据
        try {

            let user = JSON.parse(json);

            if (!user.name) {
                throw new SyntaxError("Incomplete data: no name");
            }

            blabla(); // 预料之外的 error

            console.log(user.name);

        } catch (err) {

            if (err instanceof SyntaxError) {
                console.log("JSON Error: " + err.message);
            } else {
                throw err; // 再次抛出 (*)
            }
        }
    });

    test("try...catch...finally", () => {
        // let num = 35;
        let num = -35;

        let diff, result;

        function fib(n) {
            if (n < 0 || Math.trunc(n) != n) {
                throw new Error("Must not be negative, and also an integer.");
            }
            return n <= 1 ? n : fib(n - 1) + fib(n - 2);
        }

        let start = Date.now();

        try {
            result = fib(num);
        } catch (err) {
            result = 0;
        } finally {
            diff = Date.now() - start;
        }

        console.log(result || "error occurred");

        console.log(`execution took ${diff}ms`);
    });
});
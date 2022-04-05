import { describe, expect, test } from '@jest/globals';

describe("function expression", () => {
    test("example function expression", () => {
        {
            // 我们在前面章节使用的语法称为 函数声明：
            function sayHi() {
                console.log("Hello");
            }

            sayHi();
        }
        {
            // 另一种创建函数的语法称为 函数表达式。
            // 它允许我们在任何表达式的中间创建一个新函数。
            // 例如：
            let sayHi = function () {
                console.log("Hello");
            };

            sayHi();
        }
        {
            // 重申一次：无论函数是如何创建的，函数都是一个值。上面的两个示例都在 sayHi 变量中存储了一个函数。
            // 我们还可以用 alert 打印这个变量的值：
            // function sayHi() {
            //     alert("Hello");
            // }

            // alert(sayHi); // 显示函数代码
        }
        {
            // 我们可以复制函数到其他变量：
            function sayHi() {   // (1) 创建
                console.log("Hello");
            }

            let func = sayHi;    // (2) 复制

            func(); // Hello     // (3) 运行复制的值（正常运行）！
            sayHi(); // Hello    //     这里也能运行（为什么不行呢）
        }
    });
});
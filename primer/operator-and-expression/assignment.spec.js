import { describe, expect, test } from '@jest/globals';

describe("assignment", () => {
    test("example =", () => {
        {
            let x = 2 * 2 + 1;

            console.log(x); // 5
        }

        {
            // 语句 x = value 将值 value 写入 x 然后返回 x。
            // 下面是一个在复杂语句中使用赋值的例子：
            let a = 1;
            let b = 2;

            let c = 3 - (a = b + 1);

            console.log(a); // 3
            console.log(c); // 0
            // 上面这个例子，(a = b + 1) 的结果是赋给 a 的值（也就是 3）。然后该值被用于进一步的运算。
        }

        {
            // 链式赋值（Chaining assignments）
            let a, b, c;

            a = b = c = 2 + 2;

            console.log(a); // 4
            console.log(b); // 4
            console.log(c); // 4

            // 同样，出于可读性，最好将这种代码分成几行：
            c = 2 + 2;
            b = c;
            a = c;
        }
    });

    test("example += -= *= /=", () => {
        {
            let n = 2;
            n += 5; // 现在 n = 7（等同于 n = n + 5）
            n *= 2; // 现在 n = 14（等同于 n = n * 2）

            console.log(n); // 14
        }

        {
            // 这类运算符的优先级与普通赋值运算符的优先级相同，所以它们在大多数其他运算之后执行：
            let n = 2;

            n *= 3 + 5;

            console.log(n); // 16 （右边部分先被计算，等同于 n *= 8）
        }
    });
});
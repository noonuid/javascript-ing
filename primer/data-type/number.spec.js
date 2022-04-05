import { describe, expect, test } from '@jest/globals';

describe("number", () => {
    test("example number", () => {
        // number 类型代表整数和浮点数。
        let n = 123;
        console.log(`n is ${n}`);

        n = 12.345;
        console.log(`n is ${n}`);
    });

    test("example Infinity", () => {
        // Infinity 代表数学概念中的 无穷大 ∞。是一个比任何数字都大的特殊值。
        // 我们可以通过除以 0 来得到它：
        console.log(1 / 0); // Infinity

        // 或者在代码中直接使用它：
        console.log(Infinity); // Infinity
    });

    test("example NaN", () => {
        // NaN 代表一个计算错误。它是一个不正确的或者一个未定义的数学操作所得到的结果，比如：
        console.log("not a number" / 2); // NaN，这样的除法是错误的

        // NaN 是粘性的。任何对 NaN 的进一步数学运算都会返回 NaN：
        console.log(NaN + 1); // NaN
        console.log(3 * NaN); // NaN
        console.log("not a number" / 2 - 1); // NaN
    });
});
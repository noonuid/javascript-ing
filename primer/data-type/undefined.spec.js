import { describe, expect, test } from '@jest/globals';

describe("undefined", () => {
    test("example undefined", () => {
        // 特殊值 undefined 和 null 一样自成类型。
        // undefined 的含义是 未被赋值。
        // 如果一个变量已被声明，但未被赋值，那么它的值就是 undefined：
        {
            let age;

            console.log(age); // 弹出 "undefined"
        }

        // 从技术上讲，可以显式地将 undefined 赋值给变量：
        {
            let age = 100;

            // 将值修改为 undefined
            age = undefined;

            console.log(age); // "undefined"
        }
        // ……但是不建议这样做。通常，使用 null 将一个“空”或者“未知”的值写入变量中，
        // 而 undefined 则保留作为未进行初始化的事物的默认初始值。
    });
});
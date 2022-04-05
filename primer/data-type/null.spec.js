import { describe, expect, test } from '@jest/globals';

describe("null", () => {
    test("example null", () => {
        // 特殊的 null 值不属于上述任何一种类型。
        // 它构成了一个独立的类型，只包含 null 值：
        let age = null;

        console.log(`age is ${age}`);
        // 相比较于其他编程语言，JavaScript 中的 null 不是一个“对不存在的 object 的引用”或者 “null 指针”。
        // JavaScript 中的 null 仅仅是一个代表“无”、“空”或“值未知”的特殊值。
    });
});
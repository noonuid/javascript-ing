import { describe, expect, test } from '@jest/globals';

describe("string", () => {
    test("example string", () => {
        // JavaScript 中的字符串必须被括在引号里。
        let str = "Hello";
        let str2 = 'Single quotes are ok too';
        let phrase = `can embed another ${str}`;

        console.log(`str is ${str}, str2 is ${str2}, phrase is ${phrase}`);

        // 双引号和单引号都是“简单”引用，在 JavaScript 中两者几乎没有什么差别。
        // 反引号是 功能扩展 引号。它们允许我们通过将变量和表达式包装在 ${… } 中，来将它们嵌入到字符串中。例如：
        let name = "John";

        // 嵌入一个变量
        console.log(`Hello, ${name}!`); // Hello, John!

        // 嵌入一个表达式
        console.log(`the result is ${1 + 2}`); // the result is 3
    });
});
import { describe, expect, test } from '@jest/globals';

describe("data_type", () => {
    test("dynamically typed", () => {
        // 没有错误
        let message = "hello";
        message = 123456;

        console.log(`message is ${message}`);
    });

    test("object and symbol", () => {
        // object 类型是一个特殊的类型。

        // 其他所有的数据类型都被称为“原始类型”，因为它们的值只包含一个单独的内容（字符串、数字或者其他）。
        // 相反，object 则用于储存数据集合和更复杂的实体。

        // 因为它非常重要，所以我们对其进行单独讲解。在充分学习了原始类型后，我们将会在 对象 一章中介绍 object。

        // symbol 类型用于创建对象的唯一标识符。我们在这里提到 symbol 类型是为了完整性，
        // 但我们要在学完 object 类型后再学习它。
    });

    test("typeof", () => {
        // typeof 运算符返回参数的类型。当我们想要分别处理不同类型值的时候，或者想快速进行数据类型检验时，非常有用。

        // 对 typeof x 的调用会以字符串的形式返回数据类型：
        console.log(typeof undefined) // "undefined"

        console.log(typeof 0) // "number"

        console.log(typeof 10n) // "bigint"

        console.log(typeof true) // "boolean"

        console.log(typeof "foo") // "string"

        console.log(typeof Symbol("id")) // "symbol"

        console.log(typeof Math) // "object"  (1)

        console.log(typeof null) // "object"  (2)

        console.log(typeof console.log) // "function"  (3)

        // 最后三行可能需要额外的说明：

        // 1. Math 是一个提供数学运算的内建 object。我们会在 数字类型 一节中学习它。此处仅作为一个 object 的示例。

        // 2. typeof null 的结果为 "object"。这是官方承认的 typeof 的错误，这个问题来自于 JavaScript 语言的早期阶段，
        // 并为了兼容性而保留了下来。null 绝对不是一个 object。null 有自己的类型，它是一个特殊值。typeof 的行为在这里是
        // 错误的。

        // 3. typeof alert 的结果是 "function"，因为 alert 在 JavaScript 语言中是一个函数。我们会在下一章学习函数，
        // 那时我们会了解到，在 JavaScript 语言中没有一个特别的 “function” 类型。函数隶属于 object 类型。但是 typeof 
        // 会对函数区分对待，并返回 "function"。这也是来自于 JavaScript 语言早期的问题。从技术上讲，这种行为是不正确的，
        // 但在实际编程中却非常方便。
    });
});
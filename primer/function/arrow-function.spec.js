import { describe, expect, test } from '@jest/globals';

describe("arrow function", () => {
    test("example arrow function", () => {
        // 创建函数还有另外一种非常简单的语法，并且这种方法通常比函数表达式更好。
        // 它被称为“箭头函数”，因为它看起来像这样：
        // let func = (arg1, arg2, ..., argN) => expression;

        let sum = (a, b) => a + b;

        /* 这个箭头函数是下面这个函数的更短的版本：
        
        let sum = function(a, b) {
          return a + b;
        };
        */

        console.log(sum(1, 2)); // 3

        // 如果我们只有一个参数，还可以省略掉参数外的圆括号，使代码更短。
        let double = n => n * 2;
        // 差不多等同于：let double = function(n) { return n * 2 }

        console.log(double(3)); // 6

        // 如果没有参数，括号将是空的（但括号应该保留）：
        let sayHi = () => console.log("Hello!");

        sayHi();
    });

    test("example multiline arrow function", () => {
        // 上面的例子从 => 的左侧获取参数，然后使用参数计算右侧表达式的值。
        // 但有时我们需要更复杂一点的东西，比如多行的表达式或语句。这也是可以做到的，
        // 但是我们应该用花括号括起来。然后使用一个普通的 return 将需要返回的值进行返回。
        let sum = (a, b) => {  // 花括号表示开始一个多行函数
            let result = a + b;
            return result; // 如果我们使用了花括号，那么我们需要一个显式的 “return”
        };

        console.log(sum(1, 2)); // 3
    });
});
import { describe, expect, test } from '@jest/globals';

describe("object", () => {
    test("create", () => {
        // 我们可以用下面两种语法中的任一种来创建一个空的对象（“空柜子”）：
        {
            let user = new Object(); // “构造函数” 的语法}
        }
        {
            let user = {};  // “字面量” 的语法
        }

        // 通常，我们用花括号。这种方式我们叫做字面量。
        let user = {              // 一个对象
            name: "John",         // 键 "name"，值 "John"
            age: 30,              // 键 "age"，值 30
            "likes birds": true,  // 多词属性名必须加引号
        };
        console.log(user);
    });

    test("set", () => {
        let user = {};

        user.name = "John";
        user.age = 30;
        // 这将提示有语法错误
        // user.likes birds = true
        user["likes birds"] = true;

        console.log(user);
    });

    test("get", () => {
        let user = {
            name: "John",
            age: 30,
            "likes birds": true,
        };

        console.log(user.name, user.age, user["likes birds"]);
    });

    test("delete", () => {
        let user = {
            name: "John",
            age: 30,
            "likes birds": true,
        };

        delete user.age;
        delete user["likes birds"];

        console.log(user);
    });

    test("computed properties", () => {
        let fruit = 'apple';
        let bag = {
            [fruit + 'Computers']: 5 // bag.appleComputers = 5
        };

        console.log(bag[fruit + 'Computers']);
    });

    test("property value shorthand", () => {
        function makeUser(name, age) {
            return {
                name, // 与 name: name 相同
                age,  // 与 age: age 相同
                // ...
            };
        }

        let user = makeUser("John", 30);
        console.log(user.name); // John
    });

    test("property names limitations", () => {
        {        // 我们已经知道，变量名不能是编程语言的某个保留字，如 “for”、“let”、“return” 等……
            // 但对象的属性名并不受此限制：

            // 这些属性都没问题
            let obj = {
                for: 1,
                let: 2,
                return: 3
            };

            console.log(obj.for + obj.let + obj.return);  // 6
        }

        {
            // 其他类型会被自动地转换为字符串。
            // 例如，当数字 0 被用作对象的属性的键时，会被转换为字符串 "0"：
            let obj = {
                0: "test" // 等同于 "0": "test"
            };

            // 都会输出相同的属性（数字 0 被转为字符串 "0"）
            console.log(obj["0"]); // test
            console.log(obj[0]); // test (相同的属性)
        }
    });

    test("in", () => {
        {
            let user = { name: "John", age: 30 };

            console.log(user.noSuchProperty === undefined); // true 意思是没有这个属性
            console.log("age" in user); // true，user.age 存在
            console.log("blabla" in user); // false，user.blabla 不存在。
        }

        {
            // 为何会有 in 运算符呢？与 undefined 进行比较来判断还不够吗？
            // 确实，大部分情况下与 undefined 进行比较来判断就可以了。但有一个例外情况，这种比对方式会有问题，但 in 运算符的判断结果仍是对的。
            // 那就是属性存在，但存储的值是 undefined 的时候：
            let obj = {
                test: undefined
            };

            console.log(obj.test); // 显示 undefined，所以属性不存在？

            console.log("test" in obj); // true，属性存在！
        }
    });

    test("for...in", () => {
        let user = {
            name: "John",
            age: 30,
            isAdmin: true
        };

        for (let key in user) {
            // keys
            console.log(key);  // name, age, isAdmin
            // 属性键的值
            console.log(user[key]); // John, 30, true
        }
    });
});
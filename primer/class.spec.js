import { describe, expect, test } from '@jest/globals';

describe("class", () => {
    test("the class syntax", () => {
        class User {

            constructor(name) {
                this.name = name;
            }

            sayHi() {
                console.log(this.name);
            }

        }

        // 用法：
        let user = new User("John");
        user.sayHi();
    });

    test("what is a class", () => {
        class User {
            constructor(name) { this.name = name; }
            sayHi() { console.log(this.name); }
        }

        // class 是一个函数
        console.log(typeof User); // function

        // ...或者，更确切地说，是 constructor 方法
        console.log(User === User.prototype.constructor); // true

        // 方法在 User.prototype 中，例如：
        console.log(User.prototype.sayHi); // [Function: sayHi]

        // 在原型中实际上有两个方法
        console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi
    });

    test("not just a syntactic sugar", () => {
        // 首先，通过 class 创建的函数具有特殊的内部属性标记 [[IsClassConstructor]]: true。因此，它与手动创建并不完全相同。
        // 编程语言会在许多地方检查该属性。例如，与普通函数不同，必须使用 new 来调用它：
        class User {
            constructor() { }
        }

        console.log(typeof User); // functions
        // User(); // TypeError: Cannot call a class as a function
        console.log(User); // [Function: User]
    });

    test("class expression", () => {
        // “命名类表达式（Named Class Expression）”
        // (规范中没有这样的术语，但是它和命名函数表达式类似)
        let User = class MyClass {
            sayHi() {
                console.log(MyClass); // MyClass 这个名字仅在类内部可见
            }
        };

        new User().sayHi(); // 正常运行，显示 MyClass 中定义的内容

        // console.log(MyClass); // ReferenceError: MyClass is not defined，MyClass 在外部不可见
    });

    test("getter and setter", () => {
        // “命名类表达式（Named Class Expression）”
        // (规范中没有这样的术语，但是它和命名函数表达式类似)
        let User = class MyClass {
            sayHi() {
                console.log(MyClass); // MyClass 这个名字仅在类内部可见
            }
        };

        new User().sayHi(); // 正常运行，显示 MyClass 中定义的内容

        // console.log(MyClass); // ReferenceError: MyClass is not defined，MyClass 在外部不可见
    });

    test("class expression", () => {
        class User {

            constructor(name) {
                // 调用 setter
                this.name = name;
            }

            get name() {
                return this._name;
            }

            set name(value) {
                if (value.length < 4) {
                    console.log("Name is too short.");
                    return;
                }
                this._name = value;
            }

        }

        let user = new User("John");
        console.log(user.name); // John

        user = new User(""); // Name is too short.
    });

    test("computed names", () => {
        class User {

            ['say' + 'Hi']() {
                console.log("Hello");
            }

        }

        new User().sayHi();
    });

    test("class fields", () => {
        class User {
            name = "John";

            sayHi() {
                console.log(`Hello, ${this.name}!`);
            }
        }

        let user = new User();

        user.sayHi(); // Hello, John!
        console.log(user.name); // John
        console.log(User.prototype.name); // undefined
    });
});
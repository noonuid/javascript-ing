import { describe, expect, test } from '@jest/globals';

describe("prototype", () => {
    test("__proto__", () => {
        let animal = {
            eats: true,
            walk() {
                console.log("Animal walk");
            }
        };

        let rabbit = {
            jumps: true,
        };

        rabbit.__proto__ = animal;

        let longEar = {
            earLength: 10,
            __proto__: rabbit
        };

        console.log(longEar.eats); // true
        console.log(longEar.jumps); // true
        console.log(longEar.earLength); // 10
        longEar.walk();
    });

    test("writing doesn't use prototype", () => {
        let animal = {
            eats: true,
            walk() {
                /* this method won't be used by rabbit */
            }
        };

        let rabbit = {
            __proto__: animal
        };

        rabbit.eats = false;
        rabbit.walk = function () {
            console.log("Rabbit! Bounce-bounce!");
        };

        console.log(animal.eats, rabbit.eats);
        animal.walk();
        rabbit.walk(); // Rabbit! Bounce-bounce!
    });

    test("accessor properties are an exception”", () => {
        let user = {
            name: "John",
            surname: "Smith",

            set fullName(value) {
                [this.name, this.surname] = value.split(" ");
            },

            get fullName() {
                return `${this.name} ${this.surname}`;
            }
        };

        let admin = {
            __proto__: user,
            isAdmin: true
        };

        console.log(admin.name, admin.surname, admin.fullName); // John Smith (*)

        // setter triggers!
        admin.fullName = "Alice Cooper"; // (**)

        console.log(admin.name, admin.surname, admin.fullName); // Alice Cooper，admin 的内容被修改了
        console.log(user.name, user.surname, user.fullName);  // John Smith，user 的内容被保护了
    });

    test("the value of `this`", () => {
        // animal 有一些方法
        let animal = {
            walk() {
                if (!this.isSleeping) {
                    console.log(`I walk`);
                }
            },
            sleep() {
                this.isSleeping = true;
            }
        };

        let rabbit = {
            name: "White Rabbit",
            __proto__: animal
        };

        // 修改 rabbit.isSleeping
        rabbit.sleep();

        console.log(rabbit.isSleeping); // true
        console.log(animal.isSleeping); // undefined（原型中没有此属性）
    });

    test("for...in", () => {
        {
            // for...in 循环也会迭代继承的属性。
            let animal = {
                eats: true
            };

            let rabbit = {
                jumps: true,
                __proto__: animal
            };

            // Object.keys 只返回自己的 key
            console.log(Object.keys(rabbit)); // jumps

            // for..in 会遍历自己以及继承的键
            for (let prop in rabbit) console.log(prop); // jumps，然后是 eats
        }

        {
            // 如果这不是我们想要的，并且我们想排除继承的属性，那么这儿有一个内建方法 obj.hasOwnProperty(key)：
            // 如果 obj 具有自己的（非继承的）名为 key 的属性，则返回 true。
            let animal = {
                eats: true
            };

            let rabbit = {
                jumps: true,
                __proto__: animal
            };

            for (let prop in rabbit) {
                let isOwn = rabbit.hasOwnProperty(prop);

                if (isOwn) {
                    console.log(`Our: ${prop}`); // Our: jumps
                } else {
                    console.log(`Inherited: ${prop}`); // Inherited: eats
                }
            }
        }
    });
});
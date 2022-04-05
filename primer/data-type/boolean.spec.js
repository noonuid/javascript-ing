import { describe, expect, test } from '@jest/globals';

describe("boolean", () => {
    test("example boolean", () => {
        // 这种类型通常用于存储表示 yes 或 no 的值：true 意味着 “yes，正确”，false 意味着 “no，不正确”。
        // 比如：
        let nameFieldChecked = true; // yes, name field is checked
        let ageFieldChecked = false; // no, age field is not checked

        console.log(`nameFieldChecked is ${nameFieldChecked}, ageFieldChecked is ${ageFieldChecked}`);

        // 布尔值也可作为比较的结果：
        let isGreater = 4 > 1;

        console.log(isGreater); // true（比较的结果是 "yes"）
    });
});
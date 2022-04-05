import { describe, expect, test } from '@jest/globals';

describe("arithmetic", () => {
    test("example addition, subtraction, multiplication, division", () => {
        console.log(`8 + 2 = ${8 + 2}`);
        console.log(`8 - 2 = ${8 - 2}`);
        console.log(`8 * 2 = ${8 * 2}`);
        console.log(`8 / 2 = ${8 / 2}`);
    });

    test("example remainder", () => {
        console.log(5 % 2); // 1，5 除以 2 的余数
        console.log(8 % 3); // 2，8 除以 3 的余数
    });

    test("example exponentiation", () => {
        console.log(2 ** 2); // 2² = 4
        console.log(2 ** 3); // 2³ = 8
        console.log(2 ** 4); // 2⁴ = 16

        console.log(4 ** (1 / 2)); // 2（1/2 次方与平方根相同)
        console.log(8 ** (1 / 3)); // 2（1/3 次方与立方根相同)
    });
});
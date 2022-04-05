import { describe, expect, test } from '@jest/globals';

describe("bigint", () => {
    test("example bigint", () => {
        // 尾部的 "n" 表示这是一个 BigInt 类型
        const bigInt = 1234567890123456789012345678901234567890n;

        console.log(`bigInt is ${bigInt}`);
    });
});
import { describe, expect, test } from '@jest/globals';

describe("bitwise", () => {
    test("example bitwise", () => {
        console.log(`0011 AND 0101 is ${0b0011 & 0b0101}`);
        console.log(`0011 OR 0101 is ${0b0011 | 0b0101}`);
        console.log(`0011 XOR 0101 is ${0b0011 ^ 0b0101}`);
        console.log(`1 << 5 is ${1 << 5}`);
        console.log(`0x80 >> 2 is ${0x80 >> 2}`);
    });
});
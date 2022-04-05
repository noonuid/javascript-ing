import { describe, expect, test } from '@jest/globals';

describe("logical", () => {
    test("example logical", () => {
        console.log(`true AND false is ${true && false}`);
        console.log(`true OR false is ${true || false}`);
        console.log(`NOT true is ${!true}`);
    });
});
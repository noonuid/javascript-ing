import { describe, expect, test } from '@jest/globals';

describe("variable", () => {
    test("example let", () => {
        let message = "Hello!";

        message = "Hello, World!";

        console.log(`message is ${message}`);
    });

    test("example const", () => {
        const message = "Hello!";

        // message = "Hello, World!";

        console.log(`message is ${message}`);
    });
});
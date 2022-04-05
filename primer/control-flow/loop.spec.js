import { describe, expect, test } from '@jest/globals';

describe("loop", () => {
    test("example while", () => {
        let sum = 0;
        let i = 1;

        while (i < 11) {
            sum += i;

            i++;
        }

        console.log(`1 + 2 + ... + 10 = ${sum}`);
    });

    test("example do...while", () => {
        let sum = 0;
        let i = 1;

        do {
            sum += i;

            i++
        } while (i < 11)

        console.log(`1 + 2 + ... + 10 = ${sum}`);
    });

    test("example for", () => {
        let sum = 0;

        for (let i = 1; i < 11; i++){
            sum += i;
        }

        console.log(`1 + 2 + ... + 10 = ${sum}`);
    });
});
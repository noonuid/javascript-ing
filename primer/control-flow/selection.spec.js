import { describe, expect, test } from '@jest/globals';

describe("selection", () => {
    test("example if else", () => {
        let n = 5;

        if (n < 0) {
            console.log(`${n} is negative`);
        } else if (n > 0) {
            console.log(`${n} is positive`);
        } else {
            console.log(`${n} is zero`);
        }

        let big_n = 0;
        if (n < 10 && n > -10) {
            console.log("and is a small number, increase ten-fold");

            big_n = 10 * n;
        } else {
            console.log("and is a big number, half the number");

            big_n = n / 2;
        }

        console.log(`${n} -> ${big_n}`);
    });

    test("example switch", () => {
        let a = 2 + 2;

        switch (a) {
            case 3:
                console.log('Too small');
                break;
            case 4:
                console.log('Exactly!');
                break;
            case 5:
                console.log('Too big');
                break;
            default:
                console.log("I don't know such values");
        }
    });

    test("example switch without break", () => {
        let a = 2 + 2;

        switch (a) {
            case 3:
                console.log('Too small');
            case 4:
                console.log('Exactly!');
            case 5:
                console.log('Too big');
            default:
                console.log("I don't know such values");
        }
    });
});
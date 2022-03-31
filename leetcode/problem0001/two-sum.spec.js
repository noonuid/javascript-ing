// import "mocha";
// import { expect } from "chai";

import { describe, expect, test } from '@jest/globals';

import twoSum from "./two-sum.js";

describe("problem0001", () => {
    // 测试用例
    let testCases = [
        {
            nums: [2, 7, 11, 15],
            target: 9,
            expected: [0, 1],
        },
        {
            nums: [3, 2, 4],
            target: 6,
            expected: [1, 2],
        },
        {
            nums: [3, 3],
            target: 6,
            expected: [0, 1],
        },
    ];

    test.each(testCases)("twoSum", ({ nums, target, expected }) => {
        let received = twoSum(nums, target);
        expect(received).toEqual(expected);
    });
});



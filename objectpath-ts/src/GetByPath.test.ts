import { getByPath } from "./GetByPath";
import * as fs from "fs";

describe("getByPath", () => {
    const TEST_COMMON_PATH = "test";

    const testCases = fs.readdirSync(TEST_COMMON_PATH).flatMap(file => {
        const json = fs.readFileSync(`${TEST_COMMON_PATH}/${file}`, "utf8");
        const fixture = JSON.parse(json);
        return fixture.testCases.map((testCase: [string, unknown]) => [testCase[0], fixture.data, testCase[1]]);
    });

    it("simple", () => {
        const data = { A: ["B"] };
        const path = "A[0]";
        const expected = "B";
        const result = getByPath(data, path);
        expect(result).toEqual(expected);
    });

    describe("common", () => {
        it.each(testCases)("path = \"%s\"", (path, data, expected) => {
            const result = getByPath(data, path);
            expect(result).toEqual(expected);
        });
    });
});

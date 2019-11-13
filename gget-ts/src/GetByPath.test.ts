import { getByPath } from "./GetByPath";
import * as fs from "fs";

describe("getByPath", () => {
    const TEST_COMMON_PATH = "../test";

    const testCases = fs.readdirSync(TEST_COMMON_PATH).flatMap(file => {
        const json = fs.readFileSync(`${TEST_COMMON_PATH}/${file}`, "utf8");
        const fixture = JSON.parse(json);
        return fixture.testCases.map((testCase: [string, unknown]) => [testCase[0], fixture.data, testCase[1]]);
    });

    it.each(testCases)("path = \"%s\"", (path, data, expectedResult) => {
        const result = getByPath(data, path);
        expect(result).toEqual(expectedResult);
    });
});

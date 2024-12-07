import { parseData } from "../src/parser";

test("parseData", () => {
    const data = parseData('./data.json');
    expect(data).toBeInstanceOf(Array);
    expect(data.length).toBeGreaterThan(0);
});
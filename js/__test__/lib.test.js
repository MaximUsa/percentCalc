import {maximumSalesCalc} from "../lib.js";

test("it should calculate percent of the spent money", () => {
    const sales = [12000, 8000, 10000, 15000,2000];
    const expected = 1350;

    const result = maximumSalesCalc(sales);

    expect(result).toBe(expected);

});

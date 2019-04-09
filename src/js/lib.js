export function maximumSalesCalc(items) {
    const percent = 0.05;
    const minimumExpenses = 10000;
    let total = 0;

    for (let item of items) {
        if (item > minimumExpenses) {
            total = total + item;
        }
    }
    return total * percent;
}

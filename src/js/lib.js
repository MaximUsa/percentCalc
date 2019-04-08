export function maximumSalesCalc(items) {
    let percent = 0.05;
    let total = 0;

    for (let item of items) {
        if (item > 10000) {
            total = total + item;
        }
    }
    return total * percent;
}

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const int = n.toString().split('')
    let mult = int.map(Number).reduce((acc, currentValue) => {
        return acc * currentValue
    })
    let summ = int.reduce((acc, currentValue) => {
        return parseInt(acc) + parseInt(currentValue)
    })
    console.log(mult);
    console.log(summ);
    return mult - summ
};

console.log(subtractProductAndSum(234));

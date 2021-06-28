/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let res = {}
        nums.map(el => {
        if(typeof res[el] !== "undefined"){
            res[el]++
        } else {
            res[el] = 0
        }
    })
    let answ = Object.keys(res).filter(el => res[el] === 0)
    console.log(answ);
    if (answ.length === 0) return 0
    return answ.map(Number).reduce(((previousValue, currentValue) => {
        return previousValue + currentValue
    }))
};

console.log(sumOfUnique(
    [1,1,1,1,1]));

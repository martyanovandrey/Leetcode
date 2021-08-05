/**
 * @param {number[]} nums
 * @return {number}
 */
//1st try
/*var singleNumber = function(nums) {
    let hash = {}

    nums.map(el => {
        if(!hash[el]){
            hash[el] = 0
        }
        hash[el]++
    })

    return Object.keys(hash).find(el => {
        if(hash[el] === 1) return el
    })
};*/

//2nd try
// var singleNumber = function(nums) {
//     let uniq = new Set(nums)
//     let uniqSumm = [...uniq].reduce((acc, el) => acc += el, 0)
//     let originalSumm = nums.reduce((acc, el) => acc += el, 0)
//
//     return uniqSumm * 2 - originalSumm
// }

var singleNumber = function(nums) {
    let res = new Map()

    for (let i = 0; i < nums.length; i++) {
        if(!res.has(nums[i])){
            res.set(nums[i], nums[i])
        } else {
            res.delete(nums[i])
        }
    }
    return [...res][0][0]
}

console.log(singleNumber([2, 2, 1]));

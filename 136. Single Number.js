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

var singleNumber = function(nums) {
    let uniq = new Set(nums)
    let uniqSumm = [...uniq].reduce((acc, el) => acc += el, 0)
    let originalSumm = nums.reduce((acc, el) => acc += el, 0)

    return uniqSumm * 2 - originalSumm
}

console.log(singleNumber([4, 1, 2, 1, 2]));

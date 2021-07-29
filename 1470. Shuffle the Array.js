/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let res = []
    for(let i=0, j=n; i < nums.length / 2 - 1; i++, j++){
        res.push(nums[i])
        res.push(nums[j])
    }
    return res
};


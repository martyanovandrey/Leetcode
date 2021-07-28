/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = {}

    for (let i=0; i<nums.length; i++){
        const diff = target - nums[i]
        if(hash[diff] !== undefined){
            return [hash[diff], i]
        }
        hash[nums[i]] = i
    }
};

console.log(twoSum([2,7,11,15], 9));

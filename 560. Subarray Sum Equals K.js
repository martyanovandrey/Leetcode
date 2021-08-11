/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0
    let map = {
        0: 1
    }
    let sum = 0

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]

        if(map[sum - k]){
            count += map[sum - k]
        }

        map[sum] = map[sum] ? map[sum] + 1 : 1
    }

    return count
};

// console.log(subarraySum([1, 2, 3], 3));
// console.log(subarraySum([1, 1, 1], 2));
// console.log(subarraySum([-1, -1, 1], 0));
console.log(subarraySum([1, -1, 0], 0));

/**
 * @param {number[]} nums
 * @return {number}
 */
// extra space
// var missingNumber = function(nums) {
//     let setNums = new Set(nums)
//
//     for (let i = 0; i <= nums.length; i++) {
//         if(!setNums.has(i)) return i
//     }
// };

var missingNumber = function(nums) {
    let actualSum = 0
    let arrSum = 0

    for (let i = 0; i <= nums.length; i++) {
        actualSum += i
        if(i < nums.length) arrSum += nums[i]
    }

    return actualSum - arrSum
};

console.log(missingNumber([3, 0, 1]));

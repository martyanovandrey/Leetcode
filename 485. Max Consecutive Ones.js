/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let res = 0
    let resMax = 0

    while(nums.length){
        let item = nums.pop();
        if (item === 1){
            res++
            if(res > resMax) resMax = res
        } else {
            res = 0
        }
    }
    return resMax
};

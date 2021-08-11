/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let l = 0
    let r = nums.length - 1

    while (l <= r){
        if(nums[l] === val){
            [nums[l], nums[r]] = [nums[r], nums[l]]
            r--
        } else {
            l++
        }
    }

    return l
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0,1,2,2,3,0,4,2], 2));

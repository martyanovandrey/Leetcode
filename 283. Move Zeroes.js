/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let index = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0){
            nums[index] = nums[i]
            index++
        }
    }

    for (let i = index; i < nums.length; i++) {
        nums[i] = 0
    }

};


// console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0,0,1]));

// console.log(findLastNotZero([3, 12]));
// console.log(findLastNotZero([0, 1, 0, 0]));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let res1 = getFirstOccurrence(nums, target);
    let res2 = getLastOccurrence(nums, target);
    return [res1, res2]
};

function getLastOccurrence(nums, target) {
    let left = -1;
    let right = nums.length

    while ((right - left) > 1) {
        let middle = Math.floor((left + right) / 2)
        if (nums[middle] <= target) {
            left = middle
        } else {
            right = middle
        }
    }
    return nums[left] === target ? left : -1
}

function getFirstOccurrence(nums, target) {
    let left = -1;
    let right = nums.length

    while ((right - left) > 1) {
        let middle = Math.floor((left + right) / 2)
        if (nums[middle] >= target) {
            right = middle
        } else {
            left = middle
        }
    }
    return nums[right] === target ? right : -1
}


console.log(searchRange([1], 1));

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = [...nums]
    this.original = nums
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.original
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    for(let i=this.nums.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [this.nums[i], this.nums[j]] = [this.nums[j], this.nums[i]]
    }
    return this.nums
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

var obj = new Solution([1, 2, 3])
var par1 = obj.reset()
var par2 = obj.shuffle()

console.log(obj);
console.log(par1);
console.log(par2);


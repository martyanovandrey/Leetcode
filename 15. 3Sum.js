/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = []
    let target = 0

    if (nums.length < 3) return res

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > target) break;

        let j = i + 1
        let k = nums.length - 1

        if (i > 0 && nums[i] === nums[i - 1]) continue;

        while (j < k){
            let sum = nums[i] + nums[j] + nums[k]

            if (sum === 0) {
                res.push([nums[i], nums[j], nums[k]])

                while (nums[j] === nums[j + 1]) j++
                while (nums[k] === nums[k - 1]) k--

                j++;
                k--;
                continue;
            }



            if ((nums[i] + nums[j] + nums[k]) < target){
                j++
            } else {
                k--
            }
        }
    }
    return res
};

console.log(threeSum([-2,0,0,2,2]));

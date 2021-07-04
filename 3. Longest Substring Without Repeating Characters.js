/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let res = []
    let max = 0
    let curMax = 0

    let left = 0
    let right = 0

    while (right < s.length ){
        if(!res.includes(s[right])){
            res.push(s[right])
            curMax = res.length
            right++
        } else {
            if(max < curMax){
                max = curMax
            }
            res = []
            left++
            right = left
        }
    }

    return Math.max(max, curMax)
};

console.log(lengthOfLongestSubstring("dvdf"));

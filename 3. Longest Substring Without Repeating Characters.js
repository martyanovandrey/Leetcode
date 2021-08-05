var lengthOfLongestSubstring = function(s) {
    let res = new Set()
    let max = 0
    let curMax = 0

    let left = 0
    let right = 0

    while (right < s.length ){
        if(!res.has(s[right])){
            res.add(s[right])
            curMax = res.size
            right++
        } else {
            if(max < curMax){
                max = curMax
                if(max > (s.length - left)) return max
            }
            res.clear()
            left++
            right = left
        }
    }

    return Math.max(max, curMax)
};



console.log(lengthOfLongestSubstring("abcabcbb"));

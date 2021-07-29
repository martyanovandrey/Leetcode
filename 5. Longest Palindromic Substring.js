/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let start = 0
    let end = 0

    for(let i=0; i < s.length; i++){
        let len1  = expandEdges(s, i, i)
        let len2  = expandEdges(s, i, i + 1)
        let len = Math.max(len1, len2)

        if (len > end - start){
            start = Math.ceil(i - (len - 1)/2)
            end = Math.floor(i + len/2)
        }
    }
    console.log(s.slice(start, end + 1));
    return s.slice(start, end + 1)
};

function expandEdges(s, l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]){
        l--
        r++
    }
    return r - l - 1
}

longestPalindrome("babad")
longestPalindrome("cbbd")
longestPalindrome("ac")

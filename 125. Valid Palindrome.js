/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    s = s.toLowerCase().replace(/[^a-z0-9]/gi,'');
    for(let i = 0, j = s.length - 1; i <= j - 1; i++, j--){
        if(s[i] !== s[j]) return false
    }

    return true
};

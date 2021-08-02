/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let needleLn = needle.length;
    let tempRes = 0
    if (needle === '' || needle === haystack) return 0;
    if(needleLn > haystack.length) return -1

    for (let i = 0; i < haystack.length - needle.length + 1; i++) {

        if(haystack[i] === needle[0]){
            for (let k = 0; k < needleLn; k++) {
                if(haystack[i + k] === needle[k]){
                    tempRes++
                } else {
                    break
                }
            }
        }
        if(tempRes === needleLn && tempRes !== 0) return i
        tempRes = 0
    }
    if(tempRes === 0) return -1
};


let haystack = "aaa", needle = "aaaa"

console.log(strStr(haystack, needle));

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function(s, t) {
//     return s.split('').sort().join('') === t.split('').sort().join('')
// };
//
// console.log(isAnagram("anagram", "nagaram"));   - slow solution

var isAnagram = function(s, t) {
    let sHash = createHash(s)
    let tHash = createHash(t)
    if (Object.keys(sHash).length !== Object.keys(tHash).length) return false
    for (let char in sHash){
        if(sHash[char] !== tHash[char]) return false
    }
    return true
};

function createHash(str) {
    let res = {}
    str.split('').forEach(el => {
        if (el in res) {
            res[el]++
        } else {
            res[el] = 1
        }
    })
    return res
}
console.log(isAnagram("rat",
"car"));

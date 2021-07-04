/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

let getHash = (s) => {
    return s.split('').reduce((acc, cur) => {
        acc[cur] = acc[cur] ? acc[cur] + 1 : 1
        return acc
    }, {})
}

const isAnagram = (current, target) => {
    return Object.keys(target).every((key) => target[key] === current[key])
}

var findAnagrams = function(s, p) {
    let res  = []
    let targetHash = getHash(p)
    let currentHash = getHash(s.slice(0, p.length))

    let left = 0
    let right = p.length - 1

    while (right < s.length) {
        if(isAnagram(currentHash, targetHash)) res.push(left)

        right++
        currentHash[s[right]] = currentHash[s[right]] ? currentHash[s[right]] + 1 : 1
        console.log(s[left]);
        currentHash[s[left]]--
        left++
    }
    return res
};

console.log(findAnagrams('cbaebabacd', 'abc'));

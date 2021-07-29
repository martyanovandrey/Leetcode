/**
 * @param {string} s
 * @return {number}
 */
// Version 1
// var firstUniqChar = function(s) {
//     const hash = s.split('').reduce((acc, el) => {
//         acc[el] = acc[el] ? acc[el] + 1 : 1
//         return acc
//     }, {})
//
//     let min = Infinity
//
//     for (let i=0; i<s.length; i++){
//         if(hash[s[i]] === 1){
//             min = Math.min(min, s.indexOf(s[i]))
//         }
//     }
//
//     console.log(hash);
//     return min === Infinity ? -1 : min
// };

//Version 2
var firstUniqChar = function(s) {
    const map = new Map();

    for (let i=0; i < s.length; i++){
        let cur = s[i]

        if(map.has(cur)){
            map.set(cur, map.get(cur) + 1)
        } else {
            map.set(cur, 1)
        }
    }

    for ( let i=0; i < s.length; i++){
        if(map.get(s[i]) === 1) return i
    }

    return -1
}


console.log(firstUniqChar("leetcode"));

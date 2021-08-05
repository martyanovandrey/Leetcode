/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let res = {}

    for (let i = 0; i < strs.length; i++) {
        let curStr = strs[i]
        let sortedStr = curStr.split('').sort().join('')

        if(!res[sortedStr]){
            res[sortedStr] = [curStr]
        } else {
            res[sortedStr].push(curStr)
        }
    }

    return Object.keys(res).reduce((acc, el) => {
        acc.push(res[el])
        return acc
    }, [])
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

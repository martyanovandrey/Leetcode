/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let arr = []
    let res = []
    let resCount = 0
    for(let i=1; i<=n; i++){
        arr.push(i)
    }
    console.log(arr);
    for (let i=0; i<n; i++){
        if(resCount === target.length){
            console.log(res);
            return res
        }
        if(target[i] === arr[i] || typeof target[i] === "undefined"){
            res.push('Push')
            resCount++
        } else {
            console.log(target[i], arr[i]);
            res.push('Push')
            res.push('Pop')
            arr.shift();
            i--
        }
    }
    console.log(res);
    return res
};

// buildArray([1,3], 3)
buildArray([2,3,4], 4)


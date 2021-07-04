/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let res = []
    for (let i=0; i < logs.length; i++){
        if(logs[i] === "../"){
            res.pop()
        } else if (logs[i] === "./"){

        } else {
            res.push(logs[i])
        }
    }
    return res.length
};

console.log(minOperations(["d1/","../","../","../"]));

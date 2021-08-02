/**
 * @param {number} n
 * @return {number}
 */
//Version 1
// var fib = function(n) {
//     let res = [0, 1]
//
//     for (let i = 0; i < n; i++) {
//         res.push(res[res.length - 1] + res[res.length - 2])
//     }
//
//     return res[n]
// };

function fib(n) {
    if(n < 1) return 0
    let a = 1
    let b = 1

    for (let i = 3; i <= n; i++) {
        [a, b] = [b, a + b]
    }

    return b
}
console.log(fib(1));

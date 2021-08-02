/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const notPrimes = []
    const primes = []

    for (let i = 2; i < n; i++) {
        if(!notPrimes[i]){
            primes.push(i)
            for (let j = i * 2; j < n; j += i) {
                notPrimes[j] = true
            }
        }
    }
    return primes.length
};


// function isPrime(n) {
//     if (n <= 1) return false
//
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false
//         }
//     }
//     return true
// }

console.log(countPrimes(2));

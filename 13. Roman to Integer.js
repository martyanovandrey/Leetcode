/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanInt = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let sum = 0
    let tempNumb = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if(romanInt[s[i]] > romanInt[s[i - 1]]){
            sum += romanInt[s[i]] - romanInt[s[i - 1]]
            i--
        } else {
            sum += romanInt[s[i]]
        }
    }
    return sum
};

console.log(romanToInt("III"));
// romanToInt("III")
console.log(romanToInt("IV"));
// romanToInt("IV")
console.log(romanToInt("IX"));
console.log(romanToInt("LVIII"));

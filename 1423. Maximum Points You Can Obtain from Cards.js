/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let res = 0

    let left = 0
    let right = cardPoints.length - k - 1
    const sum = cardPoints.reduce((acc, n) => acc += n, 0)
    let temp = cardPoints.slice(left, right + 1).reduce((acc, n) => acc += n, 0)
    let newRes

    while (right < cardPoints.length){
        newRes = sum - temp
        if(newRes > res) res = newRes
        temp -= cardPoints[left++]
        right++
        temp += cardPoints[right]
    }
    return res

};

console.log(maxScore([11,49,100,20,86,29,72], 4));

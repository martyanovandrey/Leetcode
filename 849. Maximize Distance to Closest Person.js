/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    let maxZero = 0
    let cur = 0
    let start = true

    for (let i=0; i < seats.length; i++){
        if(seats[i] === 0){
            cur++
            if(i === seats.length - 1 || start){
                maxZero = Math.max(maxZero, cur)
            } else {
                maxZero = Math.max(Math.ceil(cur / 2), maxZero)
            }
        } else {
            cur = 0
            start = false
        }
    }
    return maxZero
};


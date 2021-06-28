/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    if(coordinates.length === 2){
        return true
    }

    let lineSlope = slope(coordinates[0], coordinates[1])

    for(let i = 0; i < coordinates.length; i++){
        let currSlope = slope(coordinates[i], coordinates[i+1])

        if(currSlope !== lineSlope){
            return false
        }
        lineSlope =  currSlope
    }

};

function slope(p1, p2) {
    return (p2[1] - p1[1])/(p2[0] - p1[0])
}

console.log(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]));

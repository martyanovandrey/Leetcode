/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let matrixRows = matrix.length
    let matrixCol = matrix[0].length
    let res = []

    for (let i=0; i < matrixRows; i++){
        for(let j=0; j < matrixCol; j++){
            if(matrix[i][j] === 0) {
                res.push([i, j])
            }
        }
    }

    for (let i=0; i < res.length; i++){
        let [rZero, cZero] = res[i]

        for(let r = 0; r < matrixCol; r++){
            matrix[rZero][r] = 0
        }

        for(let c = 0; c < matrixRows; c++){
            matrix[c][cZero] = 0
        }
    }

};

console.log(setZeroes(
    [[0,1,2,0],[3,4,5,2],[1,3,1,5]]));

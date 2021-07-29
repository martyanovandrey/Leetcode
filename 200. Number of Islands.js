/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let rowsGrid = grid.length;
    let colGrid = grid[0].length
    let counter = 0

    function checkForClosest(r, c) {
        grid[r][c] = 'v'
        if (grid?.[r + 1]?.[c] === "1") checkForClosest(r + 1, c)
        if (grid?.[r - 1]?.[c] === "1") checkForClosest(r - 1, c)
        if (grid?.[r]?.[c + 1] === "1") checkForClosest(r, c + 1)
        if (grid?.[r]?.[c - 1] === "1") checkForClosest(r, c - 1)
    }

    for (let rows = 0; rows < rowsGrid; rows++){
        for (let col = 0; col < colGrid; col++){
            if (grid[rows][col] === "1"){
                counter++
                checkForClosest(rows, col)
            }
        }
    }
    console.log(grid)
    console.log(counter)
    return counter
};

let grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]

numIslands(grid)

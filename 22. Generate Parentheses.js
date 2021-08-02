/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = []
    function generate(cur, open, closed, n) {
        if (cur.length === 2 * n){
            res.push(cur)
        }
        if (open < n) generate(cur + '(', open + 1, closed, n)
        if (closed < open) generate(cur + ')', open, closed + 1, n)
    }
    generate('', 0, 0, n)
    return res
};
generateParenthesis(2)

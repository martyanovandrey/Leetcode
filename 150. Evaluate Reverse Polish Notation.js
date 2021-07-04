/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let res = []
    tokens.map(el => {
        if(!isNaN(parseInt(el))){
            res.push(Number(el))
        } else {
            let x = res.pop();
            let y = res.pop();
            switch (el) {
                case "+":
                    return res.push(y + x)
                case "-":
                    return res.push(y - x)
                case "*":
                    return res.push(y * x)
                case "/":
                    return res.push(Math.trunc(y / x))
            }

        }
    })
    return res[0]
};

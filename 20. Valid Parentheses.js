/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const test = {
        ')': '(',
        ']': '[',
        '}': '{',
    }

    let st = []
    if(s.length <= 1) return false
    for(let i=0; i<s.length; i++){

        if(s[i] === '(' || s[i] === '[' || s[i] === '{'){
            st.push(s[i])
        } else {
            const top = st.pop();
            if(test[s[i]] !== top) return false
        }
    }
    return !(st.length > 0)
};


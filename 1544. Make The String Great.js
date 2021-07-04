/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let st = []

    for (const ch of s) {
        st.push(ch)
        if(st.length > 1){
           let x = st[st.length - 1]
           let y = st[st.length - 2]

            if(isBad(x, y)){
                st.pop()
                st.pop()
            }
        }
    }
    return st
};

const isBad = (x, y) => {
    if(x.toLowerCase() === y.toLowerCase()) {
        if(x !== y){
            return true
        }
    }
}

console.log(makeGood('leEeetcode'));

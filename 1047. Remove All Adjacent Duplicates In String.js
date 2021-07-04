/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let st = []
    for (let i=0; i < s.length; i++){
        if(st[st.length - 1] === s[i]){
            st.pop()
        } else {
            st.push(s[i])
        }

        return st.join('')
};

console.log(removeDuplicates('azxxzy'));

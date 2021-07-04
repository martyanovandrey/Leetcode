/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    if(num.length === k) return "0";
    let st = []
    for (let i=0; i < num.length; i++){
        st.push(num[i])

        if(st[st.length - 1] < num[i]){

        } else {
            st.pop()
        }
        console.log(st);
    }
};

removeKdigits("1432219", 3)

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    if(num.length === k) return "0";
    let st = []
    for(let elem of num){
        elem = +elem;
        while(st.length > 0 && st[st.length - 1] > elem && k > 0) {
            st.pop()
            k--
        }
        st.push(elem)
        console.log(st, k);
    }
    while (st[0] === 0 && st.length > 1){
        st.shift();
    }

    while (k > 0){
        st.pop();
        k--
    }
    if(st.length === 0) return "0"
    return st.join('')
};

console.log(removeKdigits("10001", 4));

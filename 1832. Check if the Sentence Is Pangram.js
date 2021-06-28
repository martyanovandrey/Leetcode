/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let res = new Set(sentence.split(''));
    console.log(res);
    console.log(res.size);
    if (res.size === 26) return true
    return false
};

console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog'));

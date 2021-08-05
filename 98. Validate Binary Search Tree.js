/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    const isValid = (node, left, right) => {
        if (node === null) return true
        console.log(node, left, right);
        if (node.left === null && node.right === null) return node.val > left && node.val < right

        if (node.val > left && node.val < right) {
            return isValid(node.left, left, node.val) && isValid(node.right, node.val, right)
        } else {
            return false
        }
    }

    return isValid(root, -Infinity, Infinity)
};


 function TreeNode(val, left, right) {
       this.val = (val===undefined ? 0 : val)
       this.left = (left===undefined ? null : left)
       this.right = (right===undefined ? null : right)
 }

console.log(isValidBST(new TreeNode(2, 1, 3)));

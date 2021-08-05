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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let res = null

    const search = (node) => {
        if(node === null) return null
        if(node.val === val) {
            res = node
            return
        }

        if (node.val > val){
            search(node.left)
        } else {
            search(node.right)
        }
    }

    search(root)
    return res
};

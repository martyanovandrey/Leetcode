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
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    let res = {}
    let level = 0

    const dfs = (node, lvl) => {
        lvl++
        if (node === null) return

        if (node.left === null && node.right === null){
            if(res[lvl]){
                res[lvl] += node.val
            } else {
                res[lvl] = node.val
            }

            lvl = 0
            return
        }

        dfs(node.left, lvl)
        dfs(node.right, lvl)
    }



    dfs(root, level)

    return res[Math.max(...Object.keys(res).map(Number))]
};

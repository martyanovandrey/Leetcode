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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let res = []
    let pathRes = []

    const findAllPaths = (node, path) => {
        if (node === null) {
            return
        }

        path.push(node.val)

        if (node.left === null && node.right === null) {
            res.push(path.join('->'))
            return
        } else {
            findAllPaths(node.left, [...path])
            findAllPaths(node.right, [...path])
        }
    }

    findAllPaths(root, pathRes)
    return res
};




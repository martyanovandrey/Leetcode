/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let acc = []

    const dfs = (node) => {
        if(node === null) {
            acc.push(null)
            return;
        }
        acc.push(node.val)

        dfs(node.left)
        dfs(node.right)
    }

    dfs(root)
    return acc.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let strTree = data.split(',').reverse()

    const createTree = () => {
        let currVal = strTree.pop()
        if(currVal === "") return null
        const node = new TreeNode(currVal)
        node.left = createTree()
        node.right = createTree()
        return node
    }

    return createTree()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

// serialize({val: 1, left: null, right: 2})
// console.log(deserialize(serialize({val: 1, left: null, right: 2})));
console.log(deserialize('3,1,,2,,,4,,'));

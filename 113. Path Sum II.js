var pathSum = function(root, targetSum) {
    const acc = []
    const path = []

    const dfs = (node, sum) => {
        if (node === null) return;

        path.push(node.val)

        if (node.left === null && node.right === null && node.val === sum) {
            acc.push([...path])
        }

        if(node.left !== null){
            dfs(node.left, sum - node.val)
            path.pop()
        }

        if(node.right !== null){
            dfs(node.right, sum - node.val)
            path.pop()
        }
    }

    dfs(root, targetSum)

    return acc
};

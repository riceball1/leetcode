// https://leetcode.com/problems/n-ary-tree-preorder-traversal/


// Iterative Solution
// Time O(n) -- iterates all the entire nodes
// Space O(h) -- the largest be the width of the  longest path

var preorder = function (root) {
    if (!root) {
        return result;
    }
    const stack = [root]; // use stack to keep track of the dfs
    const result = []; 

    while (stack.length) { // iterate while there are nodes to iterate
        const node = stack.pop(); 
        result.push(node.val); // push the node that's iterated upon 
        for (let i = node.children.length - 1; i >= 0; i--) { // iterate the children nodes
            stack.push(node.children[ i ]);
        }
    }
    return result;
};

// Recrusive Approach

var preorder = function(root) {
    const result = [];

    // use recursive dfs
    function traverse(tree) {
        if (!tree) {
            return result;
        }
        result.push(tree.val); 
        // do similar iterate over the children of the tree and push that to the results
        for(let i = 0; i < tree.children.length; i++) {
            traverse(tree.children[i]);
        }
        return result;
    }
    return traverse(root)
}
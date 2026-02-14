class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.rigth = null;
    }
}

//implementing normal binary tree

// const normalroot = new Node(1)
// normalroot.left = new Node(2)
// normalroot.right = new Node(3)
// normalroot.right.left = new Node(4)
// normalroot.left.left = new Node(5)
// normalroot.left.right = new Node(6)
// normalroot.right.right = new Node(7)

// console.log(normalroot)

//implementing normal bst

class Bst {
    constructor(){
        this.root = null;
    }

    //insertion of node

    insert(val){
        const newNode = new Node(val)

        if(!this.root){
            this.root = newNode
            return;
        }

        let cur = this.root;
        while(true){
            if(val<cur.val){
                if(!cur.left){
                    cur.left = newNode
                    return;
                }
                cur = cur.left
            }else {
                if(!cur.right){
                    cur.right = newNode
                    return;
                }
                cur = cur.right
            }
        }
    }

    //breadth first search

    inorder(root){
        let res = []
        function helper(root){
            if(!root) return null

            helper(root.left)
            res.push(root.val)
            helper(root.right)
        }
        helper(root)
        return res
    }

    //finding min value on a tree

    findMin(node){
        if(!node) return null;

        while(node.left){
            node = node.left
        }
        return node;
    }

    delete(root,key){
        if(!root) return null;

        if(key<root.val){
            root.left = this.delete(root.left,key)
        } else if(key>root.val){
            root.right = this.delete(root.right,key)
        } else {
            if(!root.left) return root.right
            if(!root.right) return root.left

            let min = this.findMin(root.right);
            root.val = min.val
            root.right = this.delete(root.right,min.val)
        }
        return root
    }

}

//is valid bst

function isValid(root){
    let prev = null;

    function inOrder(node){
        if(!node) return true;
        if(!inOrder(node.left)) return false;
        if(prev!==null && node.val<=prev){
            return false
        }
        prev = node.val;
        return inOrder(node.right)
    }

    return inOrder(root)
}

//height of a tree

function height(root){
    if(!root) return 0

    const left = height(root.left)
    const right = height(root.right)

    return Math.max(left,right) + 1
}

//depth of a tree

function depth(root, node, level = 0){
    if(!root) return -1

    if(root.val === node) return level

    const left = depth(root.left, node, level+1)
    if(left !== -1) return left

    return depth(root.right, node, level+1)
}

// is balanced checking

function isBalanced(root){
    function height(root){
        if(!root) return 0
        const left = height(root.left)
        if(left === -1) return -1;

        const right = height(root.right)
        if(right === -1) return -1;

        if(Math.abs(left-right) > 1) return -1

        return Math.max(left,right) + 1
    }
    return height(root) !== -1
}

// second and third largest

function snadt(root){
    if(!root)return null
    let res = []
    function helper(node){
        if(!node) return null
         helper(node.right)
        res.push(node.val)
        helper(node.left)
    }
    helper(root)

    return {
        second: res[1] ?? null,
        third: res[2] ?? null
    }
}

// kth smallest

function kthsmallest(root,k){
    if(!root) return null
    let res = []
    function helper(node){
        if(!node) return null
         helper(node.left)
        res.push(node.val)
        helper(node.right)
    }
    helper(root)

    return res[k-1] ?? null;
}

// chcek if 2 bst is identical

function isIdentical(root1, root2){
    if(!root1 && !root2) return true

    if(!root1 || root2) return false

    if(root1.val !== root2.val) return false

    return(
        isIdentical(root1.left,root2.left) && 
        isIdentical(root1.right,root2.right)
    )
}

//check if s is subtree of main tree t

function isSubtree(T,S){
    if(!S) return true
    if(!T) return false

    if(isIdentical(T,S)) return true

    return (
        isSubtree(T.left,S),
        isSubtree(T.right,S)
    )
}

// bfs 

function bfs(root){
    if(!root) return null

    let queue = [root]
    let res = []

    while(queue.length){
        let node = queue.shift()
        res.push(node.val)
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }
    
    return res
}

//print only leaves

function printleaves(root){
    if(!root) return
    if(!root.left && !root.right) console.log(root.val)
    
    printleaves(root.left)
    printleaves(root.right)
    
}

//lowest common ancestor

function lowestcommon(root, a, b){
    if(!root) return null

    if(root.val === a || root.val === b) return root

    const left = lowestcommon(root.left,a,b)
    const right = lowestcommon(root.right,a,b)

    if (left && right) return root

    return left || right
}

let bstroot = new Bst()
bstroot.insert(4)
bstroot.insert(2)
bstroot.insert(6)
bstroot.insert(1)
bstroot.insert(3)
bstroot.insert(5)
bstroot.insert(7)

console.log(bstroot.inorder(bstroot.root))
console.log('----------------- delete')
bstroot.delete(bstroot.root,4)
console.log(bstroot.inorder(bstroot.root))

console.log('----------------- isValid')
console.log(isValid(bstroot.root))

console.log('----------------- height')
console.log(height(bstroot.root))

console.log('------------------ depth')
console.log(depth(bstroot.root,1))

console.log('------------------ isBalanced')
console.log(isBalanced(bstroot.root))

console.log('------------------ second and third largest')
console.log(snadt(bstroot.root))

console.log('------------------ kth smallest')
console.log(kthsmallest(bstroot.root, 3))

console.log('------------------ bfs')
console.log(bfs(bstroot.root))

console.log('------------------ print leaves')
printleaves(bstroot.root)

console.log('------------------ lowest common ancestor')
console.log(lowestcommon(bstroot.root, 2, 6))
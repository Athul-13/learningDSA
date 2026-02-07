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

    bfs(root){
        if(!root) return null

        this.bfs(root.left)
        console.log(root.val)
        this.bfs(root.right)
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

let bstroot = new Bst()
bstroot.insert(1)
bstroot.insert(2)
bstroot.insert(3)
bstroot.insert(4)
bstroot.insert(5)
bstroot.delete(bstroot.root,4)
bstroot.bfs(bstroot.root)
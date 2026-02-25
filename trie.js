class Node{
    constructor(){
        this.children = {};
        this.isEnd = false
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let node = this.root;

        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new Node()
            }
            node = node.children[char]
        }

        node.isEnd = true
    }

    search(word){
        let node = this.root;

        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }

        return node.isEnd
    }
}

// creating a trie
const trie = new Trie()

//inserting words into the trie
trie.insert('app')
trie.insert('apron')
trie.insert('apple')

//searching a word if exist in trie
console.log(trie.search('app'))
console.log(trie.search('ball'))
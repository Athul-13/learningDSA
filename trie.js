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
        console.log('word: ',word)

        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }

        return node.isEnd
    }

    startsWith(text){
        let node = this.root
        console.log('prefix: ',text)

        for(let char of text){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }

        return true
    }

    autoComplete(prefix){
        let node = this.root;
        let res = [];

        for(let char of prefix){
            if(!node.children[char]) return []
            node = node.children[char]
        }

        function dfs(node,prefix){
            if(node.isEnd){
                res.push(prefix);
            }

            for(let char in node.children){
                dfs(node.children[char],prefix+char)
            }
        }

        dfs(node,prefix)

        return res
    }
}

// creating a trie
const trie = new Trie()

//inserting words into the trie
trie.insert('app')
trie.insert('apron')
trie.insert('apple')

//searching a word if exist in trie
console.log('------------------------------- searching if word exist')
console.log(trie.search('app'))
console.log(trie.search('ball'))

//starts with prefix
console.log('------------------------------- searching prefix')
console.log(trie.startsWith('ap'))

//auto complete with predix
console.log('------------------------------- autcomplete with prefix')
console.log(trie.autoComplete('ap'))
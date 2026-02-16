class Graph {
    constructor() {
        this.adjList = {}
    }

    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex] = []
        }
    }

    addEdge(v1, v2){
        if(!this.adjList[v1]) this.addVertex[v1]
        if(!this.adjList[v2]) this.addVertex[v2]

        this.adjList[v1].push(v2)
        this.adjList[v2].push(v1)
    }

    dfs(start, visited=new Set()){
        visited.add(start)
        console.log(start)

        for(let n of this.adjList[start]){
            if(!visited.has(n)){
                this.dfs(n, visited)
            }
        }
    }
    
    bfs(start){
        let visited = new Set()
        let queue = [start]

        visited.add(start)

        while(queue.length>0){
            let node = queue.shift()
            console.log(node)
            if(!visited.has(node)) visited.add(node)

            for(let n of this.adjList[node]){
                if(!visited.has(n)){
                    queue.push(n)
                }
            }
        }
    }

    hasPath(v1, v2, visited=new Set()){
        if(v1 === v2) return true
        visited.add(v1)

        for(let n of this.adjList[v1]){
            if(!visited.has(n)){
                if(this.hasPath(n, v2, visited)) return true
            }
        }
        return false
    }

    hasCycle(){
        let parent = {}

        for(let verted in this.adjList){
            parent[verted] = verted
        }

        const find = (node) => {
            if(parent[node] !== node){
                parent[node] = find(parent[node])
            }
            return parent[node]
        }

        const union = (v1, v2) => {
            let p1 = find(v1)
            let p2 = find(v2)

            if(p1 === p2) return true

            parent[p1] = p2

            return false
        }

        for(let v in this.adjList){
            for(let n of this.adjList[v]){
                if(v<n){
                    if(union(v, n)) return true
                }
            }
        }
        return false
    }
    
    shortestPath(v1, v2){
        let queue = [v1]
        let visited = new Set([v1])
        let parent = {}

        while(queue.length){
            let node = queue.shift()

            if(node === v2) break

            for(let n of this.adjList[node]){
                if(!visited.has(n)){
                    visited.add(n)
                    queue.push(n)
                    parent[n] = node
                }
            }
        }

        let cur = v2
        let path = []

        while(cur){
            path.push(cur)
            cur = parent[cur]
        }

        return path
    }
}


//creating graph
const graph = new Graph()

//add vertex
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')

//add edges
graph.addEdge('A','B')
graph.addEdge('A','C')
graph.addEdge('B','D')

//dfs traverse
console.log('---------------dfs')
graph.dfs('A')

//bfs traverse
console.log('---------------bfs')
graph.bfs('A')

//has path between two vertices
console.log('---------------has path')
console.log(graph.hasPath('A', 'D'))

//has cycle
console.log('---------------has cycle')
console.log(graph.hasCycle())

//shortes path in unweighted graph
console.log('---------------shortes path')
console.log(graph.shortestPath('A','D'))
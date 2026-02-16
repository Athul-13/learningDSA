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
console.log(graph.hasPath('A', 'D'))
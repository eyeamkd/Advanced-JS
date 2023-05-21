class Graph{
    constructor(rootValue){
        this.adjacencyList = {}
        this.adjacencyList[rootValue] = []
    }

    addNode(value){
        if(!this.adjacencyList[value])
            this.adjacencyList[value] = []
    }

    addEdge(node1, node2){
        if(this.adjacencyList[node1] && this.adjacencyList[node2]){
            this.adjacencyList[node1].push(node2);
            this.adjacencyList[node2].push(node1);
        }
    }

    dfs(element){
        
    }
}
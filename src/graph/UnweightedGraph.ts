export default class UnweightedGraph {
    adjacencyList: Object;
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex: string): void {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1: string, vertex2: string): void {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return undefined;
        if (this.adjacencyList[vertex1].indexOf(vertex2) < 0) this.adjacencyList[vertex1].push(vertex2);
        if (this.adjacencyList[vertex2].indexOf(vertex1) < 0) this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1: string, vertex2: string): void {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return undefined;
        if (this.adjacencyList[vertex1].indexOf(vertex2) > -1) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2);
        }
        if (this.adjacencyList[vertex2].indexOf(vertex1) > -1) {
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1);
        }
    }

    removeVertex(vertex: string): void {
        if (!this.adjacencyList[vertex]) return undefined;
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    depthFirstTraversalRecursive(start) {
        const resultsArray = [];
        const visited = {};
        const dfs = (vertex) => {
            if (!vertex) return;
            visited[vertex] = true;
            resultsArray.push(vertex);
            this.adjacencyList[vertex].forEach(neighbour => !visited[neighbour] && dfs(neighbour));
        }
        dfs(start);
        return resultsArray;
    }

    depthFirstTraversalIterative(start) {
        let stack = [start];
        const resultsArray = [];
        const visited = { [start]: true };
        while(stack.length) {
            const currentVertex = stack.pop();
            resultsArray.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbour => {
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    stack.push(neighbour);
                }
            });
        }
        return resultsArray;
    }

    breadthFirstTraversal(start) {
        let queue = [start];
        const resultsArray = [];
        const visited = { [start]: true };
        while(queue.length) {
            const currentVertex = queue.shift();
            resultsArray.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbour => {
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            });
        }
        return resultsArray;
    }
}

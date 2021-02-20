import PriorityQueue from '../binary-tree/binary-heap/priority-queue/PriorityQueue';

export default class WeightedGraph {
    adjacencyList: Object;
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex: string): void {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1: any, vertex2: any, weight: number) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return undefined;
        if (this.adjacencyList[vertex1].indexOf(vertex2) < 0) this.adjacencyList[vertex1].push({ node: vertex2, weight });
        if (this.adjacencyList[vertex2].indexOf(vertex1) < 0) this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }

    dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [];
        let smallestPriorityVertex;

        for (let vertex in this.adjacencyList) {
            const distance = vertex === start ? 0 : Infinity;
            distances[vertex] = distance;
            nodes.enqueue(vertex, distance);
            previous[vertex] = null;
        }

        while(nodes.values.length) {
            smallestPriorityVertex = nodes.dequeue().value;
            if (smallestPriorityVertex === finish) {
                while(previous[smallestPriorityVertex]) {
                    path.push(smallestPriorityVertex);
                    smallestPriorityVertex = previous[smallestPriorityVertex];
                }
                break;
            }
            if (smallestPriorityVertex || distances[smallestPriorityVertex] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallestPriorityVertex]) {
                    let { node, weight } = this.adjacencyList[smallestPriorityVertex][neighbor];
                    let candidate = distances[smallestPriorityVertex] + weight;
                    if (candidate < distances[node]) {
                        distances[node] = candidate;
                        previous[node] = smallestPriorityVertex;
                        nodes.enqueue(node, candidate);
                    }
                }
            }
        }
        return path.concat(smallestPriorityVertex).reverse();
    }
}

const graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

console.log(graph.dijkstra('A', 'E'))

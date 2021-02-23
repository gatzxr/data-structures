import WeightedGraph from '../src/graph/WeightedGraph';

describe('Weighted graph', () => {
    let graph;
    beforeEach(() => {
        graph = new WeightedGraph()
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addVertex('D');
        graph.addVertex('E');
        graph.addVertex('F');

        graph.addEdge('A','B', 4);
        graph.addEdge('A','C', 2);
        graph.addEdge('B','E', 3);
        graph.addEdge('C','D', 2);
        graph.addEdge('C','F', 4);
        graph.addEdge('D','E', 3);
        graph.addEdge('D','F', 1);
        graph.addEdge('E','F', 1);
    });
    it ('should have created all links', () => {
        expect(graph.adjacencyList['A'][0].node).toBe('B');
        expect(graph.adjacencyList['A'][1].node).toBe('C');

        expect(graph.adjacencyList['B'][0].node).toBe('A');
        expect(graph.adjacencyList['B'][1].node).toBe('E');

        expect(graph.adjacencyList['C'][0].node).toBe('A');
        expect(graph.adjacencyList['C'][1].node).toBe('D');

        expect(graph.adjacencyList['D'][0].node).toBe('C');
        expect(graph.adjacencyList['D'][1].node).toBe('E');
        expect(graph.adjacencyList['D'][2].node).toBe('F');

        expect(graph.adjacencyList['E'][0].node).toBe('B');
        expect(graph.adjacencyList['E'][1].node).toBe('D');
        expect(graph.adjacencyList['E'][2].node).toBe('F');

        expect(graph.adjacencyList['F'][0].node).toBe('C');
        expect(graph.adjacencyList['F'][1].node).toBe('D');
        expect(graph.adjacencyList['F'][2].node).toBe('E');
    });
    it('should find closest path with dijkstra\'s algorithm', () => {
        expect(graph.dijkstra('A', 'F')).toEqual(['A', 'C', 'D', 'F']);
        expect(graph.dijkstra('A', 'D')).toEqual(['A', 'C', 'D']);
        expect(graph.dijkstra('B', 'D')).toEqual(['B', 'E', 'F', 'D']);
    });
});

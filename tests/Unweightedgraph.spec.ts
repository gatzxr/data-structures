import UnweightedGraph from '../src/graph/UnweightedGraph';

describe('Unweighted graph', () => {
    let graph;
    beforeEach(() => {
        graph = new UnweightedGraph();
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addVertex('D');
        graph.addVertex('E');
        graph.addVertex('F');

        graph.addEdge('A', 'B');
        graph.addEdge('A', 'C');
        graph.addEdge('B', 'D');
        graph.addEdge('C', 'E');
        graph.addEdge('D', 'E');
        graph.addEdge('D', 'F');
        graph.addEdge('E', 'F');
    });
    it ('should have created all links', () => {
        expect(graph.adjacencyList['A'][0]).toBe('B');
        expect(graph.adjacencyList['A'][1]).toBe('C');

        expect(graph.adjacencyList['B'][0]).toBe('A');
        expect(graph.adjacencyList['B'][1]).toBe('D');

        expect(graph.adjacencyList['C'][0]).toBe('A');
        expect(graph.adjacencyList['C'][1]).toBe('E');

        expect(graph.adjacencyList['D'][0]).toBe('B');
        expect(graph.adjacencyList['D'][1]).toBe('E');
        expect(graph.adjacencyList['D'][2]).toBe('F');

        expect(graph.adjacencyList['E'][0]).toBe('C');
        expect(graph.adjacencyList['E'][1]).toBe('D');
        expect(graph.adjacencyList['E'][2]).toBe('F');

        expect(graph.adjacencyList['F'][0]).toBe('D');
        expect(graph.adjacencyList['F'][1]).toBe('E');
    });
    it('should traverse graph depth first', () => {
        expect(graph.depthFirstTraversalRecursive('A')).toEqual([ 'A', 'B', 'D', 'E', 'C', 'F' ]);
        expect(graph.depthFirstTraversalIterative('A')).toEqual([ 'A', 'C', 'E', 'F', 'D', 'B' ]);
    });
    it('should traverse graph breadth first', () => {
        expect(graph.breadthFirstTraversal('A')).toEqual([ 'A', 'B', 'C', 'D', 'E', 'F' ]);
    });
    it('should remove a vertex', () => {
        graph.removeVertex('E');
        expect(graph.adjacencyList['A'][0]).toBe('B');
        expect(graph.adjacencyList['A'][1]).toBe('C');

        expect(graph.adjacencyList['B'][0]).toBe('A');
        expect(graph.adjacencyList['B'][1]).toBe('D');

        expect(graph.adjacencyList['C'][0]).toBe('A');

        expect(graph.adjacencyList['D'][0]).toBe('B');
        expect(graph.adjacencyList['D'][1]).toBe('F');

        expect(graph.adjacencyList['F'][0]).toBe('D');
    });
    it('should remove a edge', () => {
        graph.removeEdge('A', 'B');
        graph.removeEdge('B', 'D');
        expect(graph.adjacencyList['A'][0]).toBe('C');

        expect(graph.adjacencyList['C'][0]).toBe('A');
        expect(graph.adjacencyList['C'][1]).toBe('E');

        expect(graph.adjacencyList['D'][0]).toBe('E');
        expect(graph.adjacencyList['D'][1]).toBe('F');

        expect(graph.adjacencyList['E'][0]).toBe('C');
        expect(graph.adjacencyList['E'][1]).toBe('D');
        expect(graph.adjacencyList['E'][2]).toBe('F');

        expect(graph.adjacencyList['F'][0]).toBe('D');
        expect(graph.adjacencyList['F'][1]).toBe('E');
    });
})

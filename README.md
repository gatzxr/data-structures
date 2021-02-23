# @gatzxr/data-structures


This repository contains a set of the most popular data structures written in TypeScript
- Singly Linked List
- Doubly Linked List
- Stack
- Queue
- Binary Search Tree
- Max Binary Heap
- Priority Queue
- Hash Table
- Unweighted Graph
- Weighted Graph


### Installation


```sh
$ npm i @gatzxr/data-structures
```

### Usage
```
import {
    SinglyLinkedList,
    DoublyLinkedList,
    Stack,
    Queue,
    BinarySearchTree,
    PriorityQueue,
    MaxBinaryHeap,
    HashTable,
    UnweightedGraph,
    WeightedGraph
} from '@gatzxr/data-structures';

const singlyLinkedList = new SinglyLinkedList();

```


# Singly Linked List

A linked list is an array like object used for storing data.
Unlike the array, elements in a linked list can be easily inserted or removed without reallocating or reorganizing the
entire structure. A singly linked list consists of nodes where each node has a value and a pointer
to the next node.

### Methods:
- push(value: any) : SinglyLinkedList
- pop() : ListNode 
- shift() : ListNode 
- unshift(value: any) : SinglyLinkedList
- get(index: number) : ListNode
- set(index: number, value: any) : boolean
- insert(index: number, value: any) : boolean
- remove(index: number) : ListNode
- reverse() : SinglyLinkedList



###  Time Complexity
- **Insertion**: O(1)
- **Deletion**: O(1) when deleting first item or O(n) when deleting last item
- **Searching**: O(n)
- **Access**: O(n)

A visual representation of the singly linked list can be found [here][valist].

# Doubly Linked List

A doubly linked list is very similar to singly linked list, except every node has a second pointer, to the
previous node.

### Methods:
- push(value: any) : DoublyLinkedList
- pop() : ListNode
- shift() : ListNode
- unshift(value: any) : DoublyLinkedList
- get(index: number) : ListNode
- set(index: number, value: any) : boolean
- insert(index: number, value: any) : boolean
- remove(index: number) : ListNode


###  Time Complexity
- **Insertion**: O(1)
- **Deletion**: O(1)
- **Searching**: O(n)
- **Access**: O(n)

A visual representation of the doubly linked list can be found [here][valist] (dll).

_NOTE:_ Although doubly linked list are faster, they occupy more space due to the extra node.

# Stack

Stack is an abstract data structure which follows LIFO principle. The last element added to the stack
will be the first element removed from the stack.

### Methods:
- push(value: any): number
- pop(): any


###  Time Complexity
- **Insertion**: O(1)
- **Deletion**: O(1)
- **Searching**: O(n)
- **Access**: O(n)

A visual representation of a stack can be found [here][valist] (stack).

# Queue

Very similar to stacks, queues are an abstract data structure which follow FIFO principle. The fist element added to
the queue will be the first element removed from the queue.

### Methods:
- enqueue(value: any): number
- dequeue(): QueueNode


###  Time Complexity
- **Insertion**: O(1)
- **Deletion**: O(1)
- **Searching**: O(n)
- **Access**: O(n)

A visual representation of a queue can be found [here][valist] (queue).

# Binary Search Tree

A tree is a data structure that consists of nodes in a parent/child relationship. In a binary tree, each node
can have at most two children. A binary search tree is a more specific binary tree where the value of each node
is greater than all the values in left subtree and smaller than all the values in the right subtree.

### Methods
- insert(value: number): BinarySearchTree
- find(value: number): number
- breadthFirstTraversal(): number[]
- depthFirstTraversalPreOrder(): number[]
- depthFirstTraversalPostOrder(): number[]
- depthFirstTraversalInOrder(): number[]


###  Time Complexity
- **Insertion**: Average: O(logn), Worst: O(n)
- **Deletion**: Average: O(logn), Worst: O(n)
- **Searching**: Average: O(logn), Worst: O(n)
- **Access**: Average: O(logn), Worst: O(n)

A visual representation of a binary search tree can be found [here][vabst].

# Max Binary Heap

A binary heap is very similar to binary search trees, but with some different rules.
In a MaxBinaryHeap, parent nodes are always larger than child nodes.

### Methods
- insert(value: number): MaxBinaryHeap
- extractMax(): number

###  Time Complexity
- **Insertion**: O(logn)
- **Deletion**: O(logn)
- **Searching**: O(n)


A visual representation of a binary heap can be found [here][vaheap].

# Priority Queue

A priority queue is a data structure where each element has a priority. Elements with higher priorities
are served before elements with lower priorities.

### Methods
- enqueue(value: any, priority: number): PriorityQueue
- dequeue(): any

# Hash Table

A hash table is a data structure that stores key-value pairs. A hash table uses a hash function to compute
an index into an array of slots, from which the desired value can be found. Hash tables are fast for finding,
adding and removing values.

### Methods
- set(key: string, value: any): void
- get(key: string): any
- values(): any[]
- keys(): string[]

###  Time Complexity

- **Insertion**: Average: O(1), Worst: O(n)
- **Deletion**: Average: O(1), Worst: O(n)
- **Searching**: Average: O(1), Worst: O(n)

Hash table time complexity heavily depends on the hash function.


# Graph
A graph is a data structure which consists of a finite set of vertices (nodes)
together with a set of unordered (unweighted) pairs of these vertices.

### Unweighted Graph Methods
- addVertex(vertex: string): void
- addEdge(vertex1: string, vertex2: string): void
- removeEdge(vertex1: string, vertex2: string): void
- removeVertex(vertex: string): void
- depthFirstTraversalRecursive(start)
- depthFirstTraversalIterative(start)
- breadthFirstTraversal(start)

### Weighted Graph Methods
- addVertex(vertex: string): void
- addEdge(vertex1: any, vertex2: any, weight: number)
- dijkstra(start, finish)

###  Time Complexity (adjacency list implementation)
- **Add Vertex**: O(1)
- **Add Edge**: O(1)
- **Remove Vertex**: O(|V| + |E|) where |V| is number of vertices and |E| number of edges
- **Remove Edge**: O(|E|) where |E| is number of edges



[//]: #
[valist]: <https://visualgo.net/en/list>
[vabst]: <https://visualgo.net/en/bst>
[vaheap]: <https://visualgo.net/en/heap>

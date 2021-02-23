# @gatzxr/data-structures

[![npm (scoped)](https://img.shields.io/npm/v/@bamblehorse/tiny.svg)](https://www.npmjs.com/package/@gatzxr/data-structures)



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


# Singly Linked List

A linked list is an array like object used for storing data.
Unlike the array, elements in a linked list can be easily inserted or removed without reallocating or reorganizing the
entire structure. A singly linked list consists of nodes where each node has a value and a pointer
to the next node.

###  Time Complexity
- **Insertion**: O(1)
- **Deletion**: O(1) when deleting first item or O(n) when deleting last item
- **Searching**: O(n)
- **Access**: O(n)

A visual representation of the singly linked list can be found [here][valist].

# Doubly Linked List

A doubly linked list is very similar to singly linked list, except every node has a second pointer, to the
previous node.

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

###  Time Complexity
- **Insertion**: O(1)
- **Deletion**: O(1)
- **Searching**: O(n)
- **Access**: O(n)

A visual representation of a stack can be found [here][valist] (stack).

# Queue

Very similar to stacks, queues are an abstract data structure which follow FIFO principle. The fist element added to
the queue will be the first element removed from the queue.

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

###  Time Complexity
- **Insertion**: Average: O(logn), Worst: O(n)
- **Deletion**: Average: O(logn), Worst: O(n)
- **Searching**: Average: O(logn), Worst: O(n)
- **Access**: Average: O(logn), Worst: O(n)

A visual representation of a binary search tree can be found [here][vabst].

# Max Binary Heap

A binary heap is very similar to binary search trees, but with some different rules.
In a MaxBinaryHeap, parent nodes are always larger than child nodes.

###  Time Complexity
- **Insertion**: O(logn)
- **Deletion**: O(logn)
- **Searching**: O(n)


A visual representation of a binary heap can be found [here][vaheap].

# Priority Queue

A priority queue is a data structure where each element has a priority. Elements with higher priorities
are served before elements with lower priorities.

# Hash Table

A hash table is a data structure that stores key-value pairs. A hash table uses a hash function to compute
an index into an array of slots, from which the desired value can be found. Hash tables are fast for finding,
adding and removing values.

###  Time Complexity

- **Insertion**: Average: O(1), Worst: O(n)
- **Deletion**: Average: O(1), Worst: O(n)
- **Searching**: Average: O(1), Worst: O(n)

Hash table time complexity heavily depends on the hash function.

[//]: #
[valist]: <https://visualgo.net/en/list>
[vabst]: <https://visualgo.net/en/bst>
[vaheap]: <https://visualgo.net/en/heap>

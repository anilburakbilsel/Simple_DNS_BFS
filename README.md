This is going to be a very simple binary tree implementation which contains only numbers. In short; a tree is a recursive data structure.

A binary search (sometimes called an ordered or sorted binary tree) stores items in memory. It allows fast lookup, addition, and removal of items. It can be  used to implement lookup tables or dynamic set of items (for finding specified values/items). 

By definition, a binary search tree does not contain any duplicate elements since all the node values in the left subtree must be smaller than their parent node while all the node values in the right tree must be bigger than the parent node (this also means that  binary search tree keep the values - or we can say the key values stored in each node - in sorted order). This lets us to use the principle of binary search.

If the tree is balanced, most of the operations take only O(log n) time - which is much faster then linear operations/lookup in an unsorted array.

In tree structure, each node has exactly one predecessor except the root, which has none. And keep in mind that all nodes are reachable from the root. In binary trees, each node can have at most two children. In this case, each node has exactly two pointers: one to the left subtree and one to the right subtree (one of them or both can be null).

Keep in mind that, in a general tree, a node can have any number of child nodes.

This code will also contain a simple Depth-First Search and Breadth-First Search.

The space complexity of a binary search tree is O(n).

Access, deletion, search and insertion are O(log n) as long as the tree is balanced.

Trees are very useful for exposing the recursive structure of natural language and computer programs.

(in some cases, it is useful to have trees in which nodes can refer their parents - maybe you can think of it as a doubly-linked list.)
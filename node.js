export default class Node {
    
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    // in this simple case, lets limit the number of occurances
    add(value) {
        if (typeof(value) != Number) {
            throw new Error("only number values are allowed, please provide a number value, exiting...");
        }
        if (!this.children.includes(value)) {
            if (value < this.data) {
                if (this.left == null) {
                    this.left = new Node(value);
                }
                else {
                    this.left.add(value);
                }
            }
            else {
                if (this.right == null) {
                    this.right = new Node(value);
                }
                else {
                    this.right.add(value);
                }
            }
            this.children.push(new Node(valie));
        }
        else {
            console.log("sorry, this value exists")
        }
    }

    contains(value) {
        if (value == this.data) {
            return true;
        }
        else if (value < this.data) {
            if (this.left == null) {
                return false;
            }
            else {
                return this.left.contains(value);
            }
        }
        else {
            if (this.right == null) {
                return false;
            }
            else {
                return this.right.contains(value);
            }
        }
    }

    inorderTraversal() {
        if (this.left != null) {
            this.inorderTraversal(this.left);
        }
        console.log(this.data);
        if (this.right != null) {
            this.inorderTraversal(this.right);
        }
    }

    remove(data) {
        this.children = this.children.filter(child => child.data !== data);
    }


    leftHeight() {
        if (!this.left) {
            return 0;
        }
        return this.left.height() + 1;
    }

    rightHeight() {
        if (!this.right) {
            return 0;
        }
        return this.right.height() + 1;
    }

    height() {
        return Math.max(this.leftHeight, this.rightHeight);
    }

    balanceNumber() {
        return this.leftHeight() - this.rightHeight();
    }

    balancedTree() {
        if (Math.abs(this.balanceNumber()) > 1) {
            console.log("the tree is unbalanced");
            return false;
        }
        console.log("the tree is balanced");
        return true;
    }

    // returns the total number of nodes
    totalNumberOfNodes() {
        if (this.data == null) {
            return 0;
        }
        return this.left.totalNumberOfNodes() + this.right.totalNumberOfNodes() + 1;
    }

    mytest() {
        console.log("that's a test");
    }
}

export default class Node {
    
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    // in this simple case, lets limit the number of occurances
    add(value) {
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

    remove(data) {
        this.children = this.children.filter(child => child.data !== data);
    }

    mytest() {
        console.log("that's a test");
    }
}

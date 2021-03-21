export default class Node {
    
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    // in this simple case, lets limit the number of occurances
    add(data) {
        if (!this.children.includes(data)) {
            this.children.push(new Node(data));
        }
        else {
            console.log("sorry, this valu exists")
        }
    }

    remove(data) {
        this.children = this.children.filter(child => child.data !== data);
    }
}
console.log("anil");
let myNode = new Node(5);
myNode.add(50);
myNode.add(40);
myNode.remove(50);
myNode.remove(40);
console.log(myNode.children[0].data);

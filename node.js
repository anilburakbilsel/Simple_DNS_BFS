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

    mytest() {
        console.log("anil siktir");
    }
}

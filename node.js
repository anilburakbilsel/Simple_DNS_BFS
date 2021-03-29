class Node {
    
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


class User {
    constructor(name, age, email) {
      this.name = name;
      this.age = age;
      this.email = email;
    }
  
    getUserStats() {
      return `
        Name: ${this.name}
        Age: ${this.age}
        Email: ${this.email}
      `;
    }
  }
  
  module.exports = Node;

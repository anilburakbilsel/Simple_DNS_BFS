export default class Node {
    
    // constructor
    // data is the value stored by the node
    // if the next node is not provided, it is null by default
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  
    toString(callback) {
      return callback ? callback(this.data) : `${this.data}`;
    }
  }
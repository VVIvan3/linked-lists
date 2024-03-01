class LinkedList {
  nodeList = null;

  append(value) {
    const appendingNode = new Node(value);
    let node = this.nodeList;
    if (this.nodeList === null) {
      this.nodeList = appendingNode;
    } else {
      while (node.nextNode != null) node = node.nextNode;
      node.nextNode = appendingNode;
    }
  }

  prepend(value) {
    const prependingNode = new Node(value);
    if (this.nodeList === null) {
      this.append(value);
    } else {
      prependingNode.nextNode = this.nodeList;
      this.nodeList = prependingNode;
    }
  }

  size() {
    let counter = 0;
    let node = this.nodeList;
    while (node !== null) {
      counter++;
      node = node.nextNode;
    }
    return counter;
  }

  head() {
    return this.nodeList;
  }

  tail() {
    let node = nodeList;
    while (node.nextNode !== null) {
      node = node.nextNode;
    }
    return node;
  }

  at(index) {
    let counter = 0;
    let node = this.nodeList;
    while (counter !== index) {
      if (node == null) return null;
      counter++;
      node = node.nextNode;
    }
    return node;
  }

  pop() {
    let currentNode = this.nodeList;
    let prevNode;
    while (currentNode.nextNode !== null) {
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    prevNode.nextNode = null;
  }

  contains(value) {
    // return true if value in the list
  }

  find(value) {
    let node = this.nodeList;
    let counter = 0;
    while (node !== null) {
      if (node.value === value) return counter;
      node = node.nextNode;
      counter++;
    }
    return null;
  }

  toString() {
    let node = this.nodeList;
    let string = "";
    while (node != null) {
      string += `( ${node.value} ) -> `;
      node = node.nextNode;
    }
    string += null;
    return string;
  }

  insertAt(value, index) {
    // insert node at given index
  }

  removeAt(index) {
    // remove node at given index
  }
}

class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const listOne = new LinkedList();
console.log(listOne.toString());
listOne.append("test1");
listOne.append("test2");
console.log(listOne.toString());
console.log(listOne.size());

const listTwo = new LinkedList();
listTwo.prepend("thirdval");
listTwo.prepend("secondval");
listTwo.prepend("firstval");
console.log(listTwo.toString());
console.log(listTwo.size());
console.log(listTwo.at(0));
console.log(listTwo.at(1));
console.log(listTwo.at(4));
console.log(listTwo.at(2));
console.log(listTwo.find("test"));
console.log(listTwo.find("secondval"));

const listThree = new LinkedList()
listThree.append("1");
listThree.append("2");
listThree.append("3");
listThree.append("4");
console.log(listThree.toString())
listThree.pop()
console.log(listThree.toString())
listThree.pop()
listThree.pop()
console.log(listThree.toString())

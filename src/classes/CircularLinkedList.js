const head = Symbol("head");

class CircularLinkedList {
    constructor() {
        this[head] = null;
    }

    add(data) {
        const newNode = new CircularLinkedListNode(data);

        if(this[head] == null) {
            this[head] = newNode;
            newNode.next = newNode;
            newNode.prev = newNode;
        } else {
            const tail = this[head].prev;

            tail.next = newNode;
            newNode.prev = tail;
            newNode.next = this[head];
            this[head].prev = newNode;
        }
    }

    addArray(dataArray) {
      dataArray.forEach((data, _) => { this.add(data); });
      return this;
    }

    get(index) {
        if(this[head] !== null) {
            var incr = index / Math.abs(index);
            var currentNode = this[head];
            var i = 0;

            while(i !== index) {
                if(index > 0) currentNode = currentNode.next
                else currentNode = currentNode.prev
                i += incr;
            }

            return currentNode
        }

        return undefined;
    }
}

class CircularLinkedListNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

module.exports = CircularLinkedList
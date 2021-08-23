/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    
    this.storage = []
    for (var i = 0; i < k; i ++) {this.storage.push(null)}
    this.capacity = 0
    this.front = 0
    this.rear = 0
    this.size = k
    
};

MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) { return false}
    if (this.isEmpty()){this.storage[0] = value } 
    else {this.rear += 1;this.storage[this.rear % this.size] = value}
    this.capacity +=1;return true
};
MyCircularQueue.prototype.deQueue = function() {    
    if (this.isEmpty()) return false 
        this.storage[this.front % this.size] = null
    if (this.rear === this.front) {this.rear = 0;this.front = -1
    } 
    this.front += 1 ;this.capacity-=1;return true
};

MyCircularQueue.prototype.Front = function() {
    return this.storage[this.front % this.size] !== null ? this.storage[this.front % this.size]:-1 
};

MyCircularQueue.prototype.Rear = function() {    
    return this.storage[this.rear % this.size] !== null ? this.storage[this.rear % this.size]:-1   
};
MyCircularQueue.prototype.isEmpty = function() {return this.capacity === 0 ? true : false };

MyCircularQueue.prototype.isFull = function() {return this.capacity == this.size ? true : false};
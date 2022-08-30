
var MinStack = function() {
    this.storage = []
    this.min = null;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this.min === null || this.min > val) {this.min = val}
    this.storage.push(val)
    // check if this new element is the newest smallest element in the stack
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let removed = this.storage.pop()
    if (removed === null) { return null }
    if (removed === this.min) { this.min = Math.min(...this.storage)}
    return removed
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.storage[this.storage.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    
    this.total = 0
    this.size = size
    this.storage = []
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    val = parseInt(val)
    if (this.storage.length < this.size) {this.total += val ;this.storage.push(val)}
    else {
        this.total -= this.storage[0]
        this.storage.shift()
        this.storage.push(val)
        this.total += val

    }
    return this.total / this.storage.length
    // remove 0 index 
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
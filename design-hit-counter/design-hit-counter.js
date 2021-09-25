
var HitCounter = function() {
    this.hits = []
};

/** 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    this.hits.push(timestamp)  
};

/** 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    let farthestBack = timestamp >= 300 ? timestamp - 300 :  0
    let hits = 0
    // console.log('farthesback', farthestBack)
    for (var hit of this.hits) {
        if (hit > farthestBack && hit <= timestamp) {
                // console.log('hit', hit)

           hits+=1 
        }
    }
    return hits 
    // iterate over the hits 
    // if the value is >= to farthestBack
    // and the value does not exceed the time stamp 
    // add to hits 
    // if it 
    // iterate over this hits 
    // 
};

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
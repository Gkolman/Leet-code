/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

class Node {
    constructor(value, lives) {
        this.storage = {} 
        this.storage[value] = 1
        this.lives = lives
    }
    add(letter) {
        if (letter in this.storage) { this.storage[letter] += 1}
        else {this.storage[letter] = 1}
    }
    delete(letter){
        this.storage[letter] -= 1
        if (this.storage[letter] === 0) {delete this.storage[letter] }
    }
    valid() {
        let max = 0
        let total = 0
        for (var letter in this.storage) { 
            total += this.storage[letter]
            if (this.storage[letter] > max) {
                max = this.storage[letter];
            }
        }
        return [(total - max) <= this.lives, total]
    }
}

var characterReplacement = function(s, k) {
    
    let [l, max, r] = [0, 0, 1]
    let storage = {}
    let node = new Node(s[0], k)
    while(l < r) {
        let [valid, total] = node.valid()
        if (valid) { max = Math.max(max, total) }
        if (valid && r < s.length) {node.add(s[r]);r+=1}
        else { node.delete(s[l]) ;l+= 1}
    }
    return max 
};
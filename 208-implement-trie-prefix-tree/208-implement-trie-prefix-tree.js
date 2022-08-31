
var Trie = function() {
    this.storage = {}
    this.end = false; 
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let pointer = this
    while (pointer.storage[word[0]]) {
        pointer = pointer.storage[word[0]]
        word = word.slice(1)
    } 
    while (word.length) {
        let trie = new Trie()
        pointer.storage[word[0]] = trie
        pointer = trie
        word = word.slice(1)        
    }
    pointer.end = true 
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
     if (!word) {return null}
     let pointer = this
     while (pointer.storage[word[0]]) {
         pointer = pointer.storage[word[0]]
         word = word.slice(1)
     }
    if (!word.length && pointer.end === true ) { return true}
    return false
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    
    let pointer = this
    while (pointer.storage[prefix[0]]) {
        pointer = pointer.storage[prefix[0]]
        prefix = prefix.slice(1)
    }
    if (prefix.length) { return false}
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
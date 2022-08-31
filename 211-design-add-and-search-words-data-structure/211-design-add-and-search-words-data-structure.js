
var WordDictionary = function() {
    
    this.storage = {}
    this.end = false
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let pointer = this
    while(pointer.storage[word[0]]) {
        pointer = pointer.storage[word[0]]
        word = word.slice(1)
    }
    while (word.length) {
        let tree = new WordDictionary()
        pointer.storage[word[0]] = tree
        pointer = tree
        word = word.slice(1)
    }
    pointer.end = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    let pointer = this
    if (word[0] === '.') {
        for (var letter in pointer.storage) {
            if(pointer.storage[letter].search(word.slice(1))) {return true}
        }
    } else {
        if(pointer.storage[word[0]]) {
            return pointer.storage[word[0]].search(word.slice(1))
        }
    }
    if (!word.length && pointer.end === true) {return true}
    return false
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
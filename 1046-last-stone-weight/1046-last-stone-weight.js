/**
 * @param {number[]} stones
 * @return {number}
 */

let structure = function(elements) {
    this.storage = elements.sort((a,b) => { return a - b })
    this.add = (number) => {
        if (this.storage.length === 0) {this.storage.push(number); return}
        let left = 0
        let right = this.storage.length - 1
        while (left <= right ) {
            let mid = Math.floor((left + right) / 2) //0
            let sum = right - mid - left // 0
            if (number === this.storage[mid]) {
                this.storage.splice(mid, 0, number); return
            } else if (number > this.storage[mid] ){
                left = mid + 1
            } else {right = mid - 1}
        }
        this.storage.splice(left, 0, number)
    }
}
var lastStoneWeight = function(stones) {
    let storage = new structure(stones.slice())
    while(storage.storage.length > 1) {
        let sum = storage.storage[storage.storage.length - 1]  - storage.storage[storage.storage.length - 2]
        if (sum > 0) {
            console.log('before', storage.storage)
            storage.storage.splice(storage.storage.length-2, 2)
            storage.add(sum)
            console.log('after', storage.storage)
         } else {
             storage.storage.splice(storage.storage.length -2, 2)
         }
    }
    // console.log(storage.storage)
    return !storage.storage.length ? 0 : storage.storage[0]
};
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let check = (base,sample) => {
    let baseCopy = base.slice(), sampleCopy = sample.slice()
    let position = base.indexOf(sampleCopy[0])
    while (position > -1) {
        sampleCopy.shift()
        baseCopy.splice(position,1)
        position = baseCopy.indexOf(sampleCopy[0])
    }
    if (!baseCopy.length && !sampleCopy.length) {return true}
    return false;
}

let exists = (storage, target) => {
    for (var i = 0; i < storage.length; i++) {
        let element = storage[i]
        if (check(element,target)) return true 
    }
    return false
}
var combinationSum = function(candidates, target) {
    let paths = []
    let recruse = (array, num, path = []) => {
        if (num == 0) {
            if (!exists(paths, path)) {
                 paths.push(path.slice());
            }
            return
        }
        for (var i = 0; i < array.length; i++) {
            let value = array[i]
            if (num - value >= 0) { 
                path.push(value)
                recruse(array, num - value, path) 
                path.pop()
            }
        }   
    }
    recruse(candidates, target, [])

    return paths
};
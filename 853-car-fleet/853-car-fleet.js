/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
let matches = (ele1, ele2) => {
    if (!ele2) return true
    return ele1[0] === ele2[0] && ele1[1] === ele2[1]
}
var carFleet = function(target, position, speed) {
    let storage = []
    for (var i = 0; i < position.length; i++) {storage.push([ position[i], speed[i]])}
    storage.sort((a,b) => { return a[0] - b[0] })
    let stack = []
    for (var i = storage.length - 1; i > -1; i -=1) {
        let current = storage[i]
        stack.push((target - current[0]) / current[1])
        if (stack.length >= 2 && stack[stack.length -1 ] <= stack[stack.length - 2]) {
            stack.pop()
        }
    }
    return stack.length
};



/*

I
  target-> integer meaning distance
  position -> array of numbers 
  speed -> array of numbers 
  car fleet -> is an amount of cars at the same position going the same speed
  when a car cathes up to another car the speed will change to the same speed of the fleet
O -> return the number of cars going the same speed at the same position

C
E

target = 12, 
position = [10,8,0,5,3], 
speed =    [2,4,1,1,3]

0 3 5 8 10
1 3 1 4 2

10
2





*/
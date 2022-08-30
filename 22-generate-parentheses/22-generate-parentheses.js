/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
     
  let result = []
  let recurse = (open, closed, storage = []) => {
      if (open === 0 && closed === 0) {result.push(storage.join('')); return}
      if (open > 0) {
          // add open
          storage.push('(')
          recurse(open - 1, closed, storage)
          storage.pop()
      }
      if (closed > 0 && open < closed) {
          storage.push(')')
          recurse(open, closed - 1, storage)
          storage.pop()
          // we can add a close
      } 
  }
        recurse(n, n)
      return result
};
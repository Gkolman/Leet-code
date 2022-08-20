/**
 * @param {string} s
 * @return {boolean}
 */

let validateCode = (l) => {
    var cc = l.charCodeAt(0);
    if ((cc > 47 && cc < 58) || (cc > 64 && cc < 91) || (cc > 96 && cc < 123)) {
    } else {
        return false;
    }
    return true;
}

var removeCharacters = (string) => {
    let copy = ''
    string.split(' ').forEach((word) => {
        for (var i = 0; i < word.length; i++) {
            let l = word[i].toLowerCase()
            if (validateCode(l)) { copy += l }
        }
    })
    return copy
}
var isPalindrome = function(s) {
    let fixed = removeCharacters(s)
    console.log(fixed)
    for (var i = 0, j = fixed.length - 1; i < j; i+=1, j-=1) {
        if (fixed[i] !== fixed[j]){ return false }
    }
    return true
};
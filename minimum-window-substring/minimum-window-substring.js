/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(t.length === 0 || t.length > s.length) {
        return '';
    }
    const tdict = new Map();
    for(let i = 0 ; i < t.length; i++) {
        const count = tdict.has(t[i]) ? tdict.get(t[i]) : 0;
        tdict.set(t[i], count+1);
    }
    
    const matchIndexArr = [];
    for(let i = 0 ; i < s.length; i++) {
        if(tdict.has(s[i])) {
            matchIndexArr.push({val: s[i], idx: i});
        }
    }
    const sdict = new Map();
    let [minStart, minEnd, min, startIdx, endIdx, matchCharsLen] = [0, 0, Number.POSITIVE_INFINITY, 0, 0, 0]; 
    //console.log(matchIndexArr);
    while(endIdx < matchIndexArr.length) {
        //console.log(sdict);
        const val = matchIndexArr[endIdx].val;
        if(tdict.has(val)) {
            let count = sdict.has(val) ? sdict.get(val) : 0;
            count++;
            sdict.set(val, count);
            if(count === tdict.get(val)) {
                matchCharsLen++;
            }
        }
        while(matchCharsLen === tdict.size && startIdx <= endIdx) {
            //console.log(matchCharsLen, matchIndexArr[startIdx].idx, matchIndexArr[endIdx].idx, min, sdict);
            const newMin = matchIndexArr[endIdx].idx - matchIndexArr[startIdx].idx;
            //console.log(matchCharsLen, matchIndexArr[startIdx].idx, matchIndexArr[endIdx].idx, newMin, min);
            if(newMin < min) {
                minStart = matchIndexArr[startIdx].idx;
                minEnd = matchIndexArr[endIdx].idx;
                min = newMin;
                //console.log(minStart, minEnd, min);
            }
            let count = sdict.get(matchIndexArr[startIdx].val);
            count--;
            if(count === 0) {
                sdict.delete(matchIndexArr[startIdx].val);
            } else {
                sdict.set(matchIndexArr[startIdx].val, count);
            }
            if(count < tdict.get(matchIndexArr[startIdx].val)) {
                matchCharsLen--;
            }
            startIdx++;
        }
        endIdx++;
    }
    //console.log(minStart, minEnd);
    return min === Number.POSITIVE_INFINITY ? '' : s.slice(minStart, minEnd+1);
};
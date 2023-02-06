# @param {String[]} strs
# @return {String}
def longest_common_prefix(strs)
    strs = strs.sort()
    i = 1
    shorted_prefix = strs[0].split('')
    while i < strs.length do
        word = strs[i]
        j = 0
        while j < shorted_prefix.length do
            if word[j] != shorted_prefix[j]
                return "" unless j != 0
                shorted_prefix = word[0..j-1].split('')
                break
            end
            j+=1
        end
        i+=1
    end
    shorted_prefix.join('')
end
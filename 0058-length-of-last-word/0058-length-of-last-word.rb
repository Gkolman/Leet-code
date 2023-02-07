# @param {String} s
# @return {Integer}
def length_of_last_word(s)
    space = ' '
    pointer = s.length-1
    word = ''
    while s[pointer] == space do
        pointer-=1
    end
    while s[pointer] != space && pointer > -1 do
        word+=s[pointer]
        pointer-=1
    end
    word.length
end
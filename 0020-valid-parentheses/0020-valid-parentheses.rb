# @param {String} s
# @return {Boolean}
def is_valid(s)
    pairs = {
        "}" => "{",
        ")" => "(",
        "]" => "[",
    }
    stack = []
    s.each_char do |letter|
        if pairs[letter]
            last_in_stack = stack[-1]
            if pairs[letter] == last_in_stack
                stack.pop()
            else
                return false
            end
        else 
            stack.push(letter)
        end
    end
    stack.length == 0 ? true : false
end
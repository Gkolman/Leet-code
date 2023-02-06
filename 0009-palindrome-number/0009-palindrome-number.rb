# @param {Integer} x
# @return {Boolean}
def is_palindrome(x)
    if x < 0
        false
    else 
        string = x.to_s
        left = 0
        right = string.length-1
        while left < right do
            return false unless string[left] == string[right]
            right-=1
            left+=1
        end
        true
    end
end
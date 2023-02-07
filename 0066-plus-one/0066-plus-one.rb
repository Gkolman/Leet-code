# @param {Integer[]} digits
# @return {Integer[]}
def plus_one(digits)
    
    right = digits.length-1
    
    if digits[right] < 9
        digits[right]+=1
    else
        while digits[right] == 9 do
            digits[right] = 0
            if right-1 == -1
                digits.insert(0, 1)
                break
            end
            if digits[right-1] == 9
                right-=1
            else
                digits[right-1]+=1
                break;
            end
        end
    end
    digits
end

# [9]
# [9,9,9]
#      0
# [9,8,9]
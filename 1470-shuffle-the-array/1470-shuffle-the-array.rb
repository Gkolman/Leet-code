# @param {Integer[]} nums
# @param {Integer} n
# @return {Integer[]}
def shuffle(nums, n)
    
    left = 0
    right = nums.length / 2
    temp = right
    result = []
    while left < temp do
        result.push(nums[left], nums[right])
        left+=1
        right+=1
    end
    result
end

#  [2,5,1,3,4,7]
#   x x x y y y
#.  2,3,5,4,1,7
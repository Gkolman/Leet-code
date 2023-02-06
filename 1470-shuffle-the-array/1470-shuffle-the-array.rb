# @param {Integer[]} nums
# @param {Integer} n
# @return {Integer[]}
def shuffle(nums, n)
    
    left = 0
    result = []
    while left < n do
        result.push(nums[left], nums[n+left])
        left+=1
    end
    result
end
# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search_insert(nums, target)
    if nums.empty?
        return 0
    end
    left = 0
    right = nums.length-1
    while left <= right do
        middle = ((right + left) / 2).ceil
        if nums[middle] == target
            return middle
        elsif nums[middle] < target
            left = middle+1
        else
            right = middle-1
        end
    end
    return left
end
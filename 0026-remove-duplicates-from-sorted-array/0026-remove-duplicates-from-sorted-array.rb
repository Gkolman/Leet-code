# @param {Integer[]} nums
# @return {Integer}
def remove_duplicates(nums)
    if nums.uniq == nums
        nums.length
    else 
        nums = nums.uniq!
        nums.length
    end
end
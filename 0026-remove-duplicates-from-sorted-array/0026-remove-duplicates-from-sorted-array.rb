# @param {Integer[]} nums
# @return {Integer}
def remove_duplicates(nums)
    storage = Set.new
    i = 0
    while i < nums.length do
        num = nums[i]
        if storage.include?(num)
            nums.slice!(i, 1)
            i-=1
        else
            storage.add(num)
        end
        i+=1
    end
    nums.length
end
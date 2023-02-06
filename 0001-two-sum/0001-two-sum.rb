# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
    numbers = {}
    nums.each_with_index do |num, idx|
        sum = target - num
        if numbers[sum]
            return [numbers[sum], idx]
        else 
            numbers[num] = idx
        end     
    end
end
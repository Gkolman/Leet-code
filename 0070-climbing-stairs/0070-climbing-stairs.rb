# @param {Integer} n
# @return {Integer}
def climb_stairs(n)
    if n < 4
        n
    else
        fibonacci(n)
    end
end

def fibonacci(n, cache = {1 => 1, 2 => 2, 3 => 3})
    if cache[n]
        cache[n]
    else
        cache[n] = fibonacci(n-1, cache) + fibonacci(n-2, cache)
    end
    cache[n]
end




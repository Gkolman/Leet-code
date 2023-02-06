# @param {String} s
# @return {Integer}
def roman_to_int(s)
    numerals = {
        "I" => 1,
        "IV" => 4,
        "V" => 5,
        "IX" => 9,
        "X" => 10,
        "XL" => 40,
        "L" => 50,
        "XC" => 90,
        "C" => 100,
        "CD" => 400,
        "D" => 500,
        "CM" => 900,
        "M" => 1000,
    }
    i = 0
    result = 0
    while i < s.length do
        current_letter = s[i]
        next_letter = s[i+1]
        concat_letter = "#{current_letter}#{next_letter}"
        if numerals[concat_letter]
            result += numerals[concat_letter]
            i+=1
        else
            result += numerals[current_letter]
        end
        i+=1
    end 
    result
end
def first_anagram?(str1, str2) #factorial
  str1_variations = str1.chars.permutation.to_a
  str1_variations.any? do |word|
    word.join == str2
  end
end

def second_anagram?(str1, str2) #linear
  test_string = str1.chars.dup
  str1 = str1.chars
  str2 = str2.chars
  test_string.each do |char|
    if str1.include?(char) && str2.include?(char)
      str1.delete(char)
      str2.delete(char)
    end
  end
  str1.empty? && str2.empty?
end

def third_anagram?(str1, str2) #loglinear
  str1.chars.sort == str2.chars.sort
end

def fourth_anagram?(str1, str2) #linear
  str1 = str1.chars
  str2 = str2.chars
  char1 = Hash.new(0)
  char2 = Hash.new(0)
  largest_length = [str1.length, str2.length].max
  (0..largest_length).each do |i|
    char1[str1[i]] += 1 if str1[i]
    char2[str2[i]] += 1 if str2[i]
  end
  char1 == char2
end


p fourth_anagram?("elvis", "lives")
p fourth_anagram?("gizmo", "salsdfsdfly")

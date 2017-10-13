#Brute force, nested loop, O(n^2) Quadratic

def bad_two_sum?(arr, target_sum)

  i = 0

  while i < arr.length
    j = i + 1
    while j < arr.length
      return true if arr[i] + arr[j] == target_sum
      j += 1
    end
    i +=1
  end
  false
end

# sorting



def okay_two_sum?(arr, target_sum) #linear
  until arr.length == 1
    if arr.first + arr.last == target_sum
      return true
    elsif arr.first + arr.last > target_sum
      arr.pop
    elsif arr.first + arr.last < target_sum
      arr.shift
    end
    p arr
  end
  false
end

# def okay_two_sum?(arr, target_sum) #linear
#   arr.each do |num|
#     if num == target_sum / 2
#       return true if arr.count(num) == 2
#     else
#       return true if arr.include?(target_sum - num)
#     end
#   end
#   false
# end

arr = [0, 1, 5, 7]
p okay_two_sum?(arr, 6) # => should be true
p okay_two_sum?(arr, 10) # => should be false



def two_sum?(arr, target_sum)
  arr_hash = Hash.new
  arr.each do |num|
    if num * 2 == target_sum
      return true if arr.count(num) == 2
    else
      arr_hash[num] = target_sum - num
    end
  end
  arr_hash.each_value do |v|
    return true if arr_hash[v]
  end
  false # if one of the key + one of the value = target_sum then return true
end
#
#
# arr = [0, 1, 5, 7]
# p two_sum?(arr, 6) # => should be true
# p two_sum?(arr, 10) # => should be false

# require "byebug"

def range(start, last)
  return [] if last < start
  return [] if start == last
  [start] + range(start + 1, last)
end

def range(start, last)
  return_value = []
  counter = start
  while counter < last
    return_value << counter
    counter += 1
  end
  return_value
end

def exponent(base, exp)
  return 1 if exp <= 0
  base * exponent(base, exp-1)
end

def exponent2(base, exp)
  return 1 if exp <= 0
  return base if exp == 1
  if exp.even?
    even_half = exponent2(base, exp / 2)
    even_half * even_half
  else
    odd_half = exponent2(base, (exp-1) / 2)
    squared_odd = odd_half * odd_half
    base * squared_odd
  end
end

def deep_dup(arg)
  arg.map do |el|
    (el.is_a? Array) ? deep_dup(el) : el
  end
end

def fibonacci(n)
  return nil if n < 1
  return [1] if n == 1
  return [1, 1] if n == 2
  result = fibonacci(n-1)
  result + [result[-2..-1].reduce(:+)]
end

def subsets(arr)
  return [arr] if arr.length == 0
  prev_set = subsets(arr[0...-1])
  new_set = prev_set.map { |set| set += [arr[-1]]}
  prev_set + new_set
end

p subsets([1, 2, 3])


def permutations(arr)
  return [arr] if arr.length == 1
  keep = [arr.pop]
  rest = permutations(arr)
  ret_val = []
  rest.each do |single_perm|
    single_perm.each_index do |idx|
      new_perm = single_perm.dup
      ret_val << new_perm + keep if idx == single_perm.length - 1
      ret_val << new_perm.insert(idx, keep[0])
    end
  end
  ret_val
end


def binary(arr, num)
  middle_idx = arr.length/2
  middle = arr[middle_idx]
  return nil if arr.length == 1 && num != middle
  return middle_idx if num == middle
  greater_arr = arr[(middle_idx+1)..-1]
  lower_arr = arr[0...middle_idx]
  if num > middle
    greater_result = binary(greater_arr, num)
    if greater_result
      lower_arr.length + 1 + greater_result
    else
      greater_result
    end
  else
    binary(lower_arr, num)
  end
end




def merge_sort(arr)
  return arr if arr.length == 1
  mid_idx = arr.length / 2
  left = arr[0...mid_idx]
  right = arr[mid_idx..-1]
  (merge(merge_sort(left),merge_sort(right)))
end


def merge(arg1, arg2)
  result = []
  while arg1.length > 0 && arg2.length > 0
    if arg1[0] < arg2[0]
      result << arg1.shift
    elsif arg2[0] < arg1[0]
      result << arg2.shift
    end
  end
  result.concat(arg1)
  result.concat(arg2)
  result
end

merge_sort([3, 27, 38, 43, 9, 10, 82])
merge_sort([38, 27, 3, 100, 99, 10, 2])

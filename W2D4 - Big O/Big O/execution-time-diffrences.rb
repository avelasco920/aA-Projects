# def my_min(arr) #linear
#   smallest_num = arr.first
#   arr.each do |num|
#     smallest_num = num if num < smallest_num
#   end
#   smallest_num
# end

def my_min(arr) #linear
  arr.reduce do |smallest, num|
    if smallest < num
      smallest
    else
      smallest = num
    end
  end
end
# p my_min([ 0, 3, 5, 4, -5, 10, 1, 90 ])

def sub_sum(list) #quadratic
  subsets = []
  i = 0
  while i < list.length
    j = i
    while j < list.length
      subsets << list[i..j].reduce(:+)
      j += 1
    end
    i += 1
  end
  subsets.sort.last
end

def sub_sum(list) #linear
  largest = list.first
  sum = 0
  list.each do |num|
    if sum + num <= 0
      largest = sum if sum > largest
      sum = 0
    else
      sum += num
    end
    largest = sum# if sum > largest
  end
  largest
end

list = [2, 3, -6, 7, -6, 7]

p sub_sum(list)

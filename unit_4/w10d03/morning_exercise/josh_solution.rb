bigArray =
[ [ 887, -541, -430, -590, 117, 172, -319, -18 ],
  [ -269, 964, 209, 840, -456, 156, 365, -568 ],
  [ 289, -41, 488, 198, 240, 124, -427, 214 ],
  [ 452, 894, 968, -149, 683, 977, 741, -805 ],
  [ 181, -714, -950, 107, 800, 751, -143, 380 ],
  [ 152, 493, 707, 914, 37, 356, -625, 608 ],
  [ -345, 906, 83, 676, 723, 381, 557, -183 ],
  [ 199, -943, -710, 565, 193, 315, 281, 245 ] ];

def max_row_sum array
  max = 0
  (0..(array.length - 1)).each do |x|
    sum = array[x].inject(:+)
    if sum > max
      max = sum
    end
  end
  return max
end

def max_column_sum array
  max = 0
  sum = 0
  #Loop through column (2nd value)
  (0..(array.length - 1)).each do |y|
  #Loop through row
    (0..(array.length - 1)).each do |x|
      #Add the value to the sum (total is column sum)
      sum += array[x][y]
    end
    #check sum against max and change if necessary
    #reset sum to 0 before starting inside loop
    if sum > max
      max = sum
    end
    sum = 0
  end
  #return maximum
  return max
end

def check_diagonals array
  forward = 0
  backward = 0
  #check forward diagonal
  (0..(array.length - 1)).each do |x|
    forward += array[x][x]
  end
  #check backward diagonal
  final = array.length - 1
  (0..(array.length - 1)).each do |x|
    backward += array[x][final - x]
  end
  if forward > backward
    return forward
  else
    return backward
  end
end

def max_sum array
  totalmax = 0
  rowmax = max_row_sum array
  colmax = max_column_sum array
  diamax = check_diagonals array
  if rowmax > colmax
    totalmax = rowmax
  else
    totalmax = colmax
  end
  if diamax > totalmax
    totalmax = diamax
  end
  return totalmax
end

p max_sum bigArray

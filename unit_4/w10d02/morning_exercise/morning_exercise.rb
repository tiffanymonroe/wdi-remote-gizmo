
def arith arr
  arithmetic = true
  diff = arr[1]-arr[0]
  arr[1..-1].each_with_index do |x, i|
    if x - arr[i] != diff
      arithmetic = false
    end
  end
    return arithmetic
end

def geo arr
  geometric = true
  diff = Float(arr[1]) / Float(arr[0])
  arr[1..-1].each_with_index do |x, i|
    if Float(x) / arr[i] != diff
      geometric = false
    end
  end
    return geometric
end

def arith_geo arr
  if arith arr
    return "Arithmetic"
  elsif geo arr
    return "Geometric"
  else
    return -1
  end
end

p arith_geo [2, 4, 6, 8]
p arith_geo [20, 28, 36, 44]
p arith_geo [2, 6, 18, 54]
p arith_geo [6, 12, 24, 48]

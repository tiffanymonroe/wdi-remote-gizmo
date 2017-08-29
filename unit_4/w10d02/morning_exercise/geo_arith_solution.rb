def arith_geo arr

  arith, geo = [], []

  (arr.length - 1).times do |i|
    arith << (arr[i] - arr[i+1])
    geo << (arr[i+1].to_f / arr[i].to_f)
  end

  if arith.uniq.length == 1
    "Arithmetic"
  elsif geo.uniq.length == 1
    "Geometric"
  else
    -1
  end
end

p arith_geo [2, 4, 6, 8]
p arith_geo [20, 28, 36, 44]
p arith_geo [2, 6, 18, 54]
p arith_geo [6, 12, 24, 48]
p arith_geo [1, 3, 4, 5]

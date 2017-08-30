arr =     [ [10, 20, 30],
            [40, 50, 60],
            [70, -80, 90] ];

def greatestSum a
   # takes a 2d Array
   
  # sum col
      
  # must add
  # a[x][0]
  # a[x][0]
  # etc. 
     sum_col_biggest = 0 
   
   
   # outer loop
   for x in 0..a.length-1
    # p 'value of x'
    # p x
     sum_col = 0
     # inner loop
     p "inner loop values"
    for y in 0..a[x].length-1
     p a[y][x]
     # p sum_col
    end
    if sum_col > sum_col_biggest
      sum_col_biggest = sum_col
    end
   # ends outer loop
   end
   
   #able to print col values
   # next step sum values
   # compare col values
     
   
   # outside of both loops
 # p sum_col_biggest
      
      
  # sum rows
  # must add
   # a[0][x]
   # a[0][x]
   # etc. 
   sum_row_biggest = 0 
   
   
  # # outer loop
  # for x in 0..a[0].length-1
  #   sum_row = 0
  #   # inner loop
  #   a[x].each do |num|
  #     sum_row += num
  #     # ends inner loop
      
  #   end
  #   p sum_row
  #   if sum_row > sum_row_biggest
  #     sum_row_biggest = sum_row
  #   end
  # # ends outer loop
  # end
     
   
  # # outside of both loops
  # sum_row_biggest
   
   
   

   
   
   
   # sum diagnols
   # compare results for largest sum
end

greatestSum arr

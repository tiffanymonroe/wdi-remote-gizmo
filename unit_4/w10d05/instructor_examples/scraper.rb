require "open-uri"
require "Nokogiri"

# doc = Nokogiri::HTML(open("https://en.wikipedia.org/wiki/List_of_original_programs_distributed_by_Netflix"))

doc = Nokogiri::HTML(File.open("netflix_data_practice.html"))

# puts tableData = doc.css("table")

# puts tableDataText = doc.css("table").text

# p allTitles = doc.css("a").text

allTitles = doc.css('li').each do |item|
title = item.text
if title != ""
  puts "Title is: #{title}"
end
end

# puts doc

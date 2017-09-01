require "open-uri"
require "Nokogiri"

# Getting data from the Internet
# doc = Nokogiri::HTML(open("https://en.wikipedia.org/wiki/List_of_original_programs_distributed_by_Netflix"))

# Getting data from a file

doc = Nokogiri::HTML(File.open("netflix_data.html"))

# puts doc

# tableData = doc.css("table").text
#anything in the doc with the css tag 'table', add .text to only get the text in the tabe

# puts tableData

# allTitles = doc.css('a').text

# puts allTitles

doc.css('a').each do |item|
  title = item.text
  if title != ""
    puts "Title is #{title}"
  end
end

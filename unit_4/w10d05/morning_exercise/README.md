![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Gizmo

---
Title: Data Scraping with Nokogiri <br>
Type: Morning Exercise <br>
Duration: "0:45"<br>
Creator:<br>
    Original creators: Kristyn Bryan<br>
    Course: WDIR-Panthalassa<br>
Competencies: Data scraping using the Ruby gem Nokogiri <br>
Prerequisites: Ruby <br>

---

# Morning Exercise

## Data Scraping

Data scraping (also called web scraping) is the process of extracting information from websites. Data scraping focuses on transforming website content (usually HTML) into structured data which can be stored in a database or a spreadsheet.

You can do this using a package in Javascript (a popular one is known as Cheerio), but today we're going to scrap data with a Ruby gem called **Nokogiri**.
There are other Ruby gems out there that do a similar thing, but we decided to pick this popular one to show you today. Also, before we begin, just note that some websites do not want you to scrape their data. You should look into this before picking a website for scraping.

## Setup
1. Inside your `student_example` folder, create the file `scraper.rb`. Open your `scraper.rb` file with you text editor.

2. From inside your `student_example` file, install the gem nokogiri:
  `gem install nokogiri` OR some of you might need to `sudo install gem nokogiri`. This will take a few minutes. To confirm that it was installed, you can run `gem list` to show all of your Ruby gems.

3. At the top of your `scraper.rb` file, require Nokogiri and open-uri:
  - `require "open-uri"`
  - `require "Nokogiri"`

## Let's scrape!

We're going to be following [the Nokogiri documentation](http://www.nokogiri.org/tutorials/parsing_an_html_xml_document.html#from_a_string) to help us with our data scraping.

1. Let's get all of the data from a website! Add a webiste to `doc = Nokogiri::HTML(open("THEWEBADDRESS")` and let the scraping begin!
  - `doc = Nokogiri::HTML(open("http://www.rickastley.co.uk"))`
  - `puts doc` to print out the results in our console.
  - `ruby scraper.rb` to run the file in your terminal.

2. Let's look at data from another site. 
 - I want to get all of the information about Netflix Original Series. Let's open this site in our browser and update our code: `https://en.wikipedia.org/wiki/List_of_original_programs_distributed_by_Netflix`

Your code should look like:
```ruby
doc = Nokogiri::HTML(open("https://en.wikipedia.org/wiki/List_of_original_programs_distributed_by_Netflix"))
```
  - To see these **all** of the data on the page, we can output the `doc` variable.
```ruby
# in your code

puts doc
```

```ruby
# in your terminal

ruby scraper.rb
```

3. We will use html and css **selectors** to specify the data that we want. You can inspect the elements on the page to see the selectors that were used. Use your Chrome Developer to do this or you can use the special tool mentioned in the video below to inspect the elements.

4. Let's grab all of the data from the `table` element on the page (including the HTML elements):
```ruby
puts tableData = doc.css("table")
```

5. If we wanted to see the text that is between the HTML elements, we could just ask for the text:
```ruby
puts tableDataText = doc.css("table").text
```

6. If I wanted all of the titles (and none of the categories), I would write a request like the following:
```ruby
allTitles = doc.css('a').text
```
We got a lot of titles, but they're all crammed together! Let's reformat:

7. Put it in a loop to print out the individual titles:
  ```ruby
allTitles = doc.css('a').each do |item|
  title = item.text
  puts "Title is: #{title}"
end
  ```

## Save the Data
  1. If we just wanted the data in its current state (didn't care if the webiste was updated), then we could save it in a file and parse from there.
  - Use the `curl` command in your terminal, the address of the site, `>>`, and name the file that you would like the data to go in (the first time that you do it, you will be pushing and creating the file). 
  
  ```ruby
  curl https://en.wikipedia.org/wiki/List_of_original_programs_distributed_by_Netflix >> netflix_data.html
  ```
  
  - You can use the Nokogiri parser on this file by switching out the web address to the location of the file. The only difference is the word `File` prefixed to `open`. 
```ruby 
    doc = Nokogiri::HTML(File.open("netflix_data.html"))
```

We can parse through the data the same way as when we were parsing from the web.
```ruby
puts tableData = doc.css("table").text
```

## Hungry for More

1. There are multiple ways to bring in scraped data to your rails app. Follow this tutorial to learn one way to successful do this:
http://adrianmcli.com/2015/05/23/rails-scraping-tutorial/


# Help with Selectors:
Use [this link](http://ruby.bastardsbook.com/chapters/html-parsing/) for help with selectors.

## More info about the legality of data scraping
[Terms of use for scraping](http://info.sagenceconsulting.com/blog/is-your-spidey-sense-tingling-the-three-cs-of-web-scraping)

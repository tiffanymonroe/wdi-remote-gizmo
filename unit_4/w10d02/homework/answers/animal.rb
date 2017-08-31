# Commit 1 or 2 or 3
class Animal

  attr_accessor:name
  attr_reader:toys

  def initialize  name, species
    @name     = name
    @species  = species
    @toys     = []
  end

  def show_name
    puts @name.bold.green
  end

  def show_species
    puts @species.light_black
  end

  def get_toy  toy
    @toys.push( toy )
  end

  def show_toys
    @toys.each do |t|
      puts t.light_blue
    end
  end

end

# Test Code

# chewy = Animal.new  "Chewbacca" , "Wookie"
# chewy.show_name
# chewy.show_species
# chewy.get_toy "Millineum Falcon"
# chewy.show_toys

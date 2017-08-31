# Commit 1 or 2 or 3
class Client

  attr_accessor:name
  attr_reader:pets

  def initialize  name , city
    @name     = name
    @city     = city
    @pets     = []
  end

  def show_name
    puts @name.bold
  end

  def show_city
    puts @city.light_black
  end

  def get_pet  pet
    @pets.push( pet )
  end

  def show_pets
    @pets.each do |p|
      puts p.name.cyan
    end
  end

  def give_up_pet ( pet )
    index = @pets.index{ |p| p.name == pet }
    farewell_p = @pets.delete_at( index )
  end

end

#Test Code

# solo = Client.new "Han Solo" , "Corellia"
# solo.show_name
# solo.show_city
# solo.get_pet "Princess"
# solo.get_pet "Lucky"
# solo.get_pet "Rufus"
# solo.get_pet "Spike"
# solo.show_pets
# solo.give_up_pet "Rufus"
# puts '=========='
# solo.show_pets

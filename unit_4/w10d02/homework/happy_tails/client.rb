class Client
  attr_accessor :name, :city

  def initialize name, city
    @name = name
    @city = city
    @pets = []
  end

  def pets
    @pets << pet
  end
end

# tiffany = Client.new "Tiffany", "OC"
# p tiffany

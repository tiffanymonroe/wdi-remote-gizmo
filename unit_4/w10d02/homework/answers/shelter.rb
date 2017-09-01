# Commit 1 or 2 or 3
class Shelter

  attr_accessor:animals
  attr_reader:clients

  def initialize name
    @name = name
    @animals = []
    @clients = []
  end

  def add_animal animal
    @animals.push ( animal )
  end

  def add_client client
    @clients.push client
  end

  def give_toy animal , toy
    selected_animal_index = @animals.index{ |a| a.name == animal}
    puts "#{@animals[selected_animal_index].name} now has the following toys! Hooray!".bold
    @animals[selected_animal_index].get_toy( toy )
    @animals[selected_animal_index].show_toys
  end

  def show_animals
    @animals.each do |a|
      a.show_name
      a.show_species
      if a.toys.length > 0
        a.show_toys
      end

      puts " "
    end
  end

  def show_animal_names
    @animals.each do |a|
      a.show_name
    end
  end

  def show_clients
    @clients.each do |c|
      c.show_name
      c.show_city
      if c.pets.length > 0
        c.pets.each do |n|
          n.show_name
        end
    end
    puts " "
  end

  end

  def show_client_names
    @clients.each do |c|
      c.show_name
    end
  end

  def select_client client
    animal_index = @clients.index{ |c| c.name == client }
  end

  def show_client_pets client
    if client.pets.length > 0
    puts client.show_pets
    else
      puts "#{client.name} doesn't have any pets"
    end
  end


  def adopt animal, client
    #take animal out of shelter
    animal_index = @animals.index{ |a| a.name == animal }
    a = @animals.delete_at( animal_index )
    puts "==============="
    client_index = @clients.index {|c| c.name == client }
    c = @clients[client_index]

    c.get_pet a
    puts "#{c.name} has adopted #{a.name}!"
    c.show_pets
  end

  def take_back client , animal
    puts animal
    puts client
    a = client.give_up_pet animal
    @animals.push ( a )
    puts "#{client.name} has given up #{a.name}"

  end

end

# happi_tails = Shelter.new ( 'Happy Tails')
#
# puts happi_tails
# happi_tails.add_animal "fox"
# happi_tails.show_animals

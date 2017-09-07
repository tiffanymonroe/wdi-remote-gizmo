class Playlist < ApplicationRecord
has_many :rosters
has_many :songs, through: :rosters

end

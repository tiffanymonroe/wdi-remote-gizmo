class Song < ApplicationRecord
has_many :rosters
has_many :playlists, through: :rosters
end

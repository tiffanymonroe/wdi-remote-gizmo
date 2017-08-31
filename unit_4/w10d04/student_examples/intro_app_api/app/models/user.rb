class User < ApplicationRecord
  has_many :todos
  # calling a method, has_many(), that's passing in a symbol, :todos.
end

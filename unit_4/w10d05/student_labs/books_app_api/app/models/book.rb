class Book < ApplicationRecord
  100.times do
    Book.create(
    title: Faker::Book.title,
    author: Faker::Book.author,
    genre: Faker::Book.genre,
    publisher: Faker::Book.publisher,
    publish_date: Faker::Date.backward
    )
  end
end

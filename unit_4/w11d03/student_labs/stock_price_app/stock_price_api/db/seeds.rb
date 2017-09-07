# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Stock.create(
  {name: "Walt Disney Company", symbol: "DIS"},
)


Price.create([
  {avg_price: 51.74, date: Faker::Date.between(1.year.ago, Date.today), stock_id: 1},
  {avg_price: 64.80, date: Faker::Date.between(1.year.ago, Date.today), stock_id: 1},
  {avg_price: 103.82, date: Faker::Date.between(1.year.ago, Date.today), stock_id: 1},
  {avg_price: 120.07, date: Faker::Date.between(1.year.ago, Date.today), stock_id: 1}
  ])

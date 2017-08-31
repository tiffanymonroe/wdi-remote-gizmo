# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.create([
  {
    title: "Split Keyboard",
    price: 100
  },
  {
    title: "Standing Desk",
    price: 250
  }
  ])

  Review.create([
    {
      rating: 4,
      content: "My shoulders don't hurt anymore!",
      product_id: 1
    },
    {
      rating: 4,
      content: "It's a little weird, at first, but it definitely helps if you type a lot.",
      product_id: 1
    },
    {
      rating: 3,
      content: "There are better standing desks than this one.",
      product_id: 2
    }
    ])

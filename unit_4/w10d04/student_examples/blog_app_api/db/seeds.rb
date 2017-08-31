# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create({username: 'Dr. Watson'})
Post.create({
  title: 'Working with Sherlock',
  content: 'lorem et al',
  user_id: 3
  })

User.create({username: 'Carrie Branshaw'})
Post.create({
  title: 'Sex and the City',
  content: 'advice',
  user_id: 4
  })

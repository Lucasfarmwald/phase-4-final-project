# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Post.create(title: "My title", body: "this is my content")
Post.create(title: "Another boring title", body: "this is my content")


User.create(firstname: "lucas", lastname: "Farmwald", email: "farmwaldlucas@gmail.com", password: "Tloh")
User.create(firstname: "Hannah", lastname: "Farmwald", email: "Hannahfarmwald@gmail.com", password: "tlo")
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

lucas = User.create(username: "lucas", password: "lucaslucas")
ryan = User.create(username: "Ryan", password: "ryanryan")
hannah = User.create(username: "Hannah", password: "hannahhannah")

Property.create(address: "first address 123", description: "This is a very nice house", title: "Grand house", image_url: "https://www.jamesedition.com/stories/wp-content/uploads/2022/03/mansions_main_fin.jpg")
Property.create(address: "2nd address 123", description: "This is a very nice house", title: "Grand house", image_url: "https://www.jamesedition.com/stories/wp-content/uploads/2022/03/mansions_main_fin.jpg")
Property.create(address: "3rd address 123", description: "This is a very nice house", title: "Grand house", image_url: "https://www.jamesedition.com/stories/wp-content/uploads/2022/03/mansions_main_fin.jpg")


lucas.reviews.create(review: "first review", property_id: 2)
hannah.reviews.create(review: "second review", property_id: 2)
ryan.reviews.create(review: "third review", property_id: 2)

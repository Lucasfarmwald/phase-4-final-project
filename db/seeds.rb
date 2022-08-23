# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(email: "test@test.com", password: "testTest", first_name: "testname", last_name: "testlastname")
bob = User.create(email: "New@test.com", password: "testst", first_name: "bobname", last_name: "testbobname")
blog_1 = user.blogs.create(title: "new title 1", content: "this is a text content 1", likes: 0, dislikes: 0)
blog_2 = user.blogs.create(title: "new title 2", content: "this is a text content 2", likes: 0, dislikes: 0)
blog_3 = bob.blogs.create(title: "new title 3", content: "this is a text content 3", likes: 0, dislikes: 0)

comment_1 = Comment.create(user_id: 2, content: "I didn't find this post helpful", blog_id:1,  likes: 50, dislikes: 1)
comment_2 = Comment.create(user_id: 1, content: "Ok well I dont care bud", likes: 13, blog_id: 1, dislikes:2)
comment_3 = Comment.create(user_id: 1, content: "I think you're mean", likes: 4, blog_id: 1, dislikes: 1)
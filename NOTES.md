## Overview

Create a blog website where user's can create there own profile. Users will be able to create a secure password that will be hashed and salted with bcrypt. I will have full CRUD for the user and the blog that belongs the user that has logged on. User's can like a blog as well as leave a comment on the blog.

## Features

--User signin / signup
--Navigation
--Blog list
--Blog edit
--Blog create
--Blog delete
--Comment list
--Comment edit
--Comment delete
--Comment like

## MVP

--User signin / signup

## Models

## User

has many blogs
has many comments
has many commented_blogs through comments

## Stretch Goals

##

User model has many posts through comments
has many comments

Comments model belongs to user and to Post
has many posts

Post model belongs belongs to User

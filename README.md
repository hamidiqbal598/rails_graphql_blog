# README

#### This project is just a revising of GraphQl concepts and basic things of GraphQl in Ruby on Rails framework.


### Basic Quering

{
user(id:2) {
name,
email
posts {
title
}
}
}


### BasIc Mutation 
Creating User

mutation {
    createUser(input: {
        name: "Hamid Iqbal",
        email: "hamidiqbal598@gmail.com"
    }) {
        user {
        id,
        name,
        email
        }
    }
}
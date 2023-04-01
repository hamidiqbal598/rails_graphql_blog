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

### Some commands to setup the frontend setup

**yarn global add create-react-app
~  create-react-app frontend_graphql_blog
~ cd frontend_graphql_blog   
~ tree . -I "node_modules"  
~ yarn add tailwindcss
~ yarn add postcss-cli autoprefixer -D
~ yarn tailwind init --full**

Further Steps for tailwind:
Update src/index.css file
create new file postcss.config.js and add require plugins
Update package,kson with this line in scripts:
`"build:style": "tailwind build src/index.css -o src/tailwind.css",
"start": "yarn build:style && react-scripts start",`
remove App.css
Add import './tailwind.css' in index.js file
create directory components and move app.js to this directory
Remove app.test.js as we don't need test right now
Remove all the boiler code in App.js

~  yarn add react-apollo apollo-boost graphql

Update the index.js and add all the neede imports and configure the Graphql links


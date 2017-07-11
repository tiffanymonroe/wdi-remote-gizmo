# Lab - REST: Index/Show

## Superheros

### Basic Express App
1. Create a new directory inside your labs dir called "superheroes"
1. cd into superheroes
1. perform an npm init, specify server.js as your entry
1. install express, tell npm to save express as a dependency in package.json
1. create a server.js file
1. inside server.js, require express and save it to a variable named `express`
1. create a variable named app, and set it equal to `express()`
1. have app listen on port 3000
    - once it's listening, log "Here to save the day..."
1. test it by going to http://localhost:3000

### Routes

1. Create a variable called superheroes and set it to ['batman', 'superman', 'hulk']
1. Create a route to /superheroes
    - The route should send the entire superheroes array
1. Create a route to /superheroes/:index
    - The route should send the superhero that is at the index in the superheroes array as specified by req.params.index

### Enhancing Data

1. Change the entries in the superheroes array so that each element in the array is an object
    - E.g. Instead of 'superman' have: `{ name: "superman", powers: ['flight', 'invulnerability', 'x-ray vision']}`

## Friends

1. cd back into the labs directory
1. create a directory called friends
1. cd into friends
1. Create a basic express app
1. Create a variable inside server.js that is an array of your friends
1. Create index and show routes
1. Enhance the data so that each friend is an object with age, location, eyeColor, hairColor attributes

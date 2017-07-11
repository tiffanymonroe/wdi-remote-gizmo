# Lab - Delete/Update

## Morning

Come up with a CRUDable model (fruit, human, robot, etc)

1. Create an express app
1. Create an array of your CRUDable objects
1. Create an index route that displays all your objects
1. In the index route, create a form which will make a DELETE request to the server
1. Create a DELETE route handler that will remove the specified object from the array and redirect to the index page

## Afternoon

Expand the morning's app to have the following:

1. An edit route/page that populates the forms with the data from the server
1. A link to the edit route on the index page
1. A PUT route that will change the element of your objects array, as specified by the index in the URL, to req.body
    - this page should redirect back to the index route, once this is completed
    - the form on the edit page should make a PUT request to this route

## Hungry for more?

1. Create a show page/route with links to it from the index page
1. The show page should have a link to the edit page
1. The edit page should have a delete button which will delete the specified item

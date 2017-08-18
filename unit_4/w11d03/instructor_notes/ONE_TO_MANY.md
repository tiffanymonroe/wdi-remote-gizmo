![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-GIZMO

---
Title: Science App - one to many <br>
Type: Lesson<br>
Duration: 2.5 hrs<br>
Creator: Thom Page <br>
Topics: Rails 5 API, One-to-many relationships<br>

---

# &#x1F52D; &#x1F4D0; ONE TO MANY - Science App &#x1F914; &#x1F4A1; &#x1F4A1; &#x1F4A1;

We are going to make app to visualize data for **temperatures** that _belong to_ **locations**.

Each **location** will _have many_ **temperatures**

---
### Lesson objectives:

* scaffold two independent models
* set up a one-to-many relationship
* use nested routes 
* design the api endpoints

---

# SETUP

Create the top-level directory that will house both our rails api and the frontend.

![](https://i.imgur.com/4UaEhHG.png)

The app will have a **one-to-many** relationship between Locations and Temperatures. For each location we can log changes in the climate.

Create the Rails API:

![](https://i.imgur.com/rpCP8cR.png)

`cd` into the Rails directory

![](https://i.imgur.com/yzXqT47.png)

<br>
<hr>
11:10

<hr>

# Generate App

Scaffold **Locations** with `lat` and `lng` as decimals, and also a `name` column.

![](https://i.imgur.com/fKsFQA7.png)

Scaffold **Temperatures** with `average_high_f`
and `average_low_f` as integers

![](https://i.imgur.com/L2nvF2d.png)

This has added boilerplate files and code to

* `app/models`
* `app/controllers`
* `config/routes.rb`
* `db/migrate`


Check that the **migration files** are correct.

![](https://i.imgur.com/2byNjnP.png)

![](https://i.imgur.com/V5Br2JY.png)

We have two fully-formed but independent resources: Locations and Temperatures. What we need to do next is **relate** them together.
<br>
<hr>

11:18

# Add foreign key

Let's generate a migration to add the foreign key for our **one-to-many** relationship.

If **Locations** have many **Temperatures**, and

A **Temperature** belongs to a **Location** ...

> Question: Which model should have the foreign key?

> Answer: The foreign key always goes in the many. In this case there will be many temperatures. Each temperature will reference its single location via its foreign key.

![](https://i.imgur.com/q3KqO1D.png)

Inside the migration we want to **add a column** for the foreign key:

![](https://i.imgur.com/7vMizUm.png)

We have three migrations pending, let's run them and generate our schema:

![](https://i.imgur.com/Dobz8xA.png)

schema.rb

![](https://i.imgur.com/dpVEaCI.png)

<br>
<hr>
11:20

# ActiveRecord Relations

models/location.rb

![](https://i.imgur.com/7DkIqsS.png)

models/temperature.rb

![](https://i.imgur.com/uEvVl9y.png)

<br>
<hr>

11:21

# Seed data

seeds.rb

```
Location.create(
  lat: 40.7128,
  lng: 74.0059,
  name: 'New York City'
)

Location.create(
  lat: 78.2232,
  lng: 15.6267,
  name: 'Longyearbyen'
)

Temperature.create(
  average_high_f: 39,
  average_low_f: 26,
  location_id: 1
)

Temperature.create(
  average_high_f: 50,
  average_low_f: 40,
  location_id: 1
)

Temperature.create(
  average_high_f: 80,
  average_low_f: 35,
  location_id: 1
)

Temperature.create(
  average_high_f: 60,
  average_low_f: 44,
  location_id: 1
)

Temperature.create(
  average_high_f: 71,
  average_low_f: 55,
  location_id: 1
)

Temperature.create(
  average_high_f: 90,
  average_low_f: 55,
  location_id: 1
)

Temperature.create(
  average_high_f: 30,
  average_low_f: 55,
  location_id: 1
)

Temperature.create(
  average_high_f: 1,
  average_low_f: -20,
  location_id: 2
)
```

![](https://i.imgur.com/7QJxXzg.png)

<br>
<hr>

11:22

# Rails console



`rails c`

Active Record: see all temperatures belonging to a location

![](https://i.imgur.com/pPMz4CB.png)

Active Record: see a temperature's associated location

![](https://i.imgur.com/JpRLxlC.png)


<br>
<hr>

11:23

# &#x21A9; &#x1F690; &#x1F69B; ROUTES &#x1F6E3; &#x1F500; &#x21AA;

## Design considerations

**Locations**

All I need are **index** and **show** for Locations.

* I don't want anyone to be able to add or edit locations on my API.

* I do want there to be a list of locations (index), and information for each location (show).

**Temperatures**

All I need are **index** and **create** for Climates.

* I would my API to send an index of temperature records associated with a location.

* I would like my user to add temperature data to the API for a given location.

11:25

`config/routes.rb`

#### Limit location routes _only_ to index and show

![](https://i.imgur.com/9S1AqeH.png)

#### Limit temperature routes _only_ to index and create

![](https://i.imgur.com/2IKEv6T.png)

![](https://i.imgur.com/nkt52i8.png)

![](https://i.imgur.com/Y6rtmGY.png)

The _only_ keeps it all nice and tidy.

<br>
<hr>

11:27

# NESTED ROUTES

**Special considerations for Temperatures controller:**

If I'm going to have a **Temperatures controller** at all,
my **Temperatures** index and create routes will need to **reference the location** for that temperature. 

This means I will want the location id in the params so that I am only ever finding and making temperature records relating to a specific location.

I don't want any free-floating temperature records separate from a location.

> The Temperatures **index** should be an index only of locations for a specific location. 
> 
> The Temperatures **create** should add data only for a specific location. For these we will need a location id in the params.

We can do this with **Nested Routes**

From the [routing docs](http://guides.rubyonrails.org/routing.html)

![](https://i.imgur.com/VnsMsOI.png)

![](https://i.imgur.com/uIduYwe.png)


## Nest temperatures inside of locations

Nest climates inside locations with the `do` ... `end` block:

![](https://i.imgur.com/IrGqDnq.png)


`rails routes` gives us the routes:

![](https://i.imgur.com/xFOVElr.png)

Note that all of our Temperature routes are nested within the location routes, and we have a param called `location_id` for those.

11:30

## A route to Update a Temperature record

I changed my mind about my API. I want to be able to edit a specific Temperature record. Let's change our router:

* allow `:update`

![](https://i.imgur.com/MSO3U4b.png)

`rails routes`

![](https://i.imgur.com/hy83Wup.png)

This has given us update route that looks like this:

```
locations/:location_id/temperatures/:id
```

Our Temperature update route gives us two params: one for

* `location_id`, the id of the location, and one just for
* `id`, the id of the specific temperature record to update

## refactor to use _except_

It would make a little bit more sense to exclude the two remaining routes rather than permit the three. For this we can use **except**.

We can say that we want all the Temperature routes **except** show and destroy:

![](https://i.imgur.com/eZ5F513.png)

`rails routes` gives us the same thing as before, but our code is a little more brisk.

<br>
<hr>
11:35

# CONTROLLER ACTIONS


## Locations controller

We want only an **index** and a **show** for Locations. Let's remove else everything except the boilerplate `set_location` method. 

![](https://i.imgur.com/zhBsWwz.png)

11:40

## Temperatures controller

We have an **index**, a **create**, and an **update** in our routes. Let's remove the show and destroy controller methods.

![](https://i.imgur.com/T9kTJhn.png)

### Temperatures index

In our temperatures index, we want only to send those temperature records associated with a location. We have a param coming through called `location_id`.

How can we use that?

We will not use `Temperature.all` to get a collection of climates, instead we will get a collection of climates with `Temperature.where`.

![](https://i.imgur.com/bkrya95.png)

Here we are finding all of the temperature records whose `location_id` column has the same number as the one coming through in the `:location_id` param.

`rails s` and check the results in the browser:

URI `/locations/1/temperatures`: all temperatures for location 1

![](https://i.imgur.com/FBE1X5d.png)

Thanks, nested resources.

<br>

11:45

### Temperatures create

We will want to add the incoming `location_id` to our new temperature record:

```ruby
@temperature.location_id = params[:location_id]
```

Remove `location: @temperature`, it's a holdover from the old Rails way of doing things, and will give us errors in Postman if it stays.

![](https://i.imgur.com/KYTWXYR.png)


![](https://i.imgur.com/0LhS7m4.png)

 * Here we create a new Temperature using `temperature_params`
 * on the new temperature, set the id column to the location_id from the url
 * If save is successful, send a 201
 * If unsuccessful send a 422

<br>

## TEST CREATE ROUTE WITH POSTMAN

![](https://i.imgur.com/AFrC64b.png)

 Add a new temperature record for location 2.

 `POST http://localhost:3000/locations/2/temperatures`

 Succesful Postman request:

 ![](https://i.imgur.com/h1j6Rlg.png)


Note that the temperature was saved with a `location_id` as intended.

### under the hood: params hash again

![](https://i.imgur.com/sKDIr4N.png)

This is like the `request object` in Express.

Our `req.body` is within `temperature`, and our `req.params` is within `location_id`. That's just the way Rails formats it. Body and params go into the **params** hash.

11:52

**Update**

How would we modify our Temperatures update route to account for the associated location?

## Locations with related temperatures

# SHOW

Why not have our Locations show route also deliver the Temperatures for that location? It would be convenient for a front-end developer to query:

```
locations/1
```

And receive json for the location that includes the temperatures for that location. We can choose what that data will look like, and we have some options.

![](https://i.imgur.com/TeyA6hx.png)

The frontend developer would get locations with `result.data.locations`, and temperatures with `result.data.temperatures`:

![](https://i.imgur.com/PfH0mbt.png)

**OR**

Wouldn't it be better if our JSON looked like this instead:

![](https://i.imgur.com/Vb5Xs6E.png)

The frontend developer would get locations with `result.data.locations` and climates with `result.data.locations.temperatures`.

We can format our data this way with the `.to_json` method that takes a hash as an argument that we can use to include the temperatures.

```ruby
render json: @location.to_json(include: :temperatures)
```

![](https://i.imgur.com/A5d3Bf4.png)

<br>

# INDEX

We can do the same for our Locations index if we want:

![](https://i.imgur.com/Jw4nmKk.png)

We get an array of locations, each with related temperatures data.


<br>
12:30 LAB
<br>
<hr>
License
<hr>

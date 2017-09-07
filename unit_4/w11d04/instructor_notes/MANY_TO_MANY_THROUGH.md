![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-GIZMO

---
Title: Many-to-many through <br>
Type: Lesson<br>
Duration: 2 - 2.5 hrs including lab<br>
Creator: Thom Page <br>
Topics: Rails 5 API, many-to-many through association, join table <br>

---

# MANY-TO-MANY THROUGH

Rails **many-to-many through** relationship

**Lesson Objectives**

_after this lesson, students will be able to:_

* Establish a many-to-many relationship between models
* Make a join table
* Make a model associated with a join table

---

## RESOURCE TRADING APP

We're going to make a trading app where many traders can buy and sell commodities.

### Make two basic models with full CRUD

**Traders** and **Commodities**

![](https://i.imgur.com/NTF229o.png)

... and `--skip-git` if using >= Rails 5.1

```
rails db:create
```

![](https://i.imgur.com/F8NvHq1.png)

![](https://i.imgur.com/z4Q71b9.png)

![](https://i.imgur.com/FjLgzpq.png)

Schema

![](https://i.imgur.com/VUwPbEl.png)

10:10

<br>

### Seed data

seeds.rb

```
Trader.create([
  { name: 'Slimer', money: 1000 },
  { name: 'Skeletor', money: 1000 },
  { name: 'Dame Edna', money: 1000 },
  { name: 'Cousin It', money: 1000 },
  { name: 'Boomhauer', money: 1000 },
  { name: 'Molly Ringwald', money: 1000 },
  { name: 'Ursula', money: 1000 },
  { name: 'James A. Garfield', money: 1000 },
  { name: 'Krang', money: 1000 },
  { name: 'Carl Sagan', money: 1000 }
])

Commodity.create([
  { name: "Oil", price: 53.28 },
  { name: "Gold", price: 1216.70 },
  { name: "Natural Gas", price: 3.175 },
  { name: "Copper", price: 2.654 },
  { name: "Gasoline", price: 1.6 },
  { name: "Silver", price: 17.95 },
  { name: "Wheat", price: 428.2 },
  { name: "Coffee", price: 153.20 },
  { name: "Lumber", price: 325.50 },
  { name: "Milk", price: 16.77 },
])
```

![](https://i.imgur.com/p9cpkMi.png)

![](https://i.imgur.com/qJ3QJkP.png)

<br>

`localhost:3000/traders`

![](https://i.imgur.com/ZqYYZ3r.png)

<br>

`localhost:3000/commodities`

![](https://i.imgur.com/dvXe062.png)

<br>

10:15

## Many-to-many

**Traders** and **Commodities** are two independently existing models. These models will remain independent.

To relate **traders** and **commodities** we will not use foreign keys.

We have **traders** and we have **commodities**. What would be a suitable relationship if a trader wanted to own a commodity?

We could do a regular one-to-many, a *has many* and *belongs to*.

But that way, a commodity with a foreign key could only be associated with one trader.

What if we want it so that traders could take from a pool of commodities? A commodity could belong to many traders, and a trader could have many different commodities?

A commodity would need a way to keep track of all its traders, OR, a trader would need a way to keep track of all its commodities . . . The foreign keys for each would have to be an array. An array of trader ids or an array of commodity ids.

Since we are not storing array data, we need a better solution.

10:18

**ANSWER:** A Join Table.

![](https://i.imgur.com/vxqyUqp.png)

We can make a **third table** to map the relationships between traders and commodities.

According to this table, Trader 5 _and_ Trader 9 each have Commodity 5, and Commodities 2 _and_ 1 are owned by Trader 2.


**Many commodities can be associated with many traders and vice versa.**


10:20

We can make a join table a couple of ways.

* `has_many_and_belongs_to` relation which makes a table that does not have its own model. It's kind of an anonymous table and looks exactly like the image above. The table itself can't be expanded. This is the simpler relation.

* `has_many :through` makes a new model for the join table. This way, you can name the join table and add columns and validation to the table if you need to. We will use this way.


**Construct a new resource called Ledger.**

Our ledger will be its own model, and it will map the relationship between Traders and Commodities. We will add a **qty** column to our ledger to document _how many_ of a given commodity a trader owns.

**qty** is the information _about_ the relationship.

Our table will look like this:

![](https://i.imgur.com/6VMhd1p.png)

We can **scaffold** the Ledger and provide foreign-key columns to the table that are associated with our traders and commodities.

<br>

10:23

## Make join table

```
rails generate scaffold ledger trader:references commodity:references qty:integer
```

![](https://i.imgur.com/0eP4c02.png)

Migration file:

![](https://i.imgur.com/Ek03ksT.png)

![](https://i.imgur.com/JizgCXO.png)

schema:

![](https://i.imgur.com/522O95H.png)

11:25

Don't worry that it all looks funny. Just imagine it's doing the same thing as if the foreign key columns were just integers.

You can see they are just integers in dbconsole:

![](https://i.imgur.com/foqDWOH.png)

Add the relations to the two main models:

![](https://i.imgur.com/X4t7jy1.png)

![](https://i.imgur.com/hPN7L9G.png)

A Trader or a Commodity will have many ledgers associated with them.

A Trader or a Commodity also have many of each other, and they do so through the ledgers.

Leave the Ledger model exactly how the scaffold made it:

![](https://i.imgur.com/zAkpBJN.png)

A single ledger does not have multiple traders or multiple commodities. A ledger will have **one** trader and **one** commodity. Therefore it **belongs to** a trader and **belongs to** a commodity.

<br>


10:30
## RAILS CONSOLE QUERIES

With these three models interacting with each other, there are many permutations of ActiveRecord commands that can be performed to achieve the same result.

`rails c`

Create a Ledger

![](https://i.imgur.com/upb2kb8.png)

This creates a relationship between trader 1 and commodity 1 (it's the only relationship we created so far).

Let's also create a relationship between trader 2 and the same commodity (1)

![](https://i.imgur.com/Gi3Xrkx.png)

See Trader 1's commodities

![](https://i.imgur.com/ou5iiPt.png)

> This trader has 'Oil'

See Commodity 1's traders

![](https://i.imgur.com/eHc8OCS.png)

> 'Oil' is owned by both trader 1 and trader 2

See Trader 1's ledgers

![](https://i.imgur.com/NU3eRI7.png)

> We can see the qty of each commodity the trader owns

See Commodity 1's ledgers

![](https://i.imgur.com/HiKAz1d.png)

> For this commodity, we can see that trader 1 has  qty 1, and trader 2 has qty 1

Create a ledger entry that belongs to Trader 1:
Can specify the qty

![](https://i.imgur.com/JyPVyfs.png)

<br>

NOTE: Unless you create a ledger, the relationship will not have a qty.

Create a new commodity that belongs to Trader 1:
It will be added to the Ledger with qty nil

![](https://i.imgur.com/vFChIZL.png)

Create a new trader that owns commodity 6. It will be added to the Ledger with qty nil

![](https://i.imgur.com/OgCSiAs.png)

<hr>
10:40

## Sending JSON Relations

Send Commodities with related Traders using `to_json`:

![](https://i.imgur.com/fTiuAkd.png)

Send Traders with related Commodities using `to_json`:

![](https://i.imgur.com/dts0q7V.png)

Send Ledgers will related Traders and Commodities:

![](https://i.imgur.com/hS7ZPEh.png)



<br>
<hr>

10:45

## ANOTHER EXAMPLE - Playlists and Songs

### Many to Many

A **song** can belong to many **playlists**

Many **playlists** might share the same **song**

Playlists and songs will be related with a two-column join table:

* `playlist_id`
* `song_id`

![](https://i.imgur.com/42vVJ1F.png)

Song 2 is associated with Playlist 4 _and_ Playlist 6.

Playlist 6 is associated with Song 2 _and_ Song 18.

The relationship is **symmetrical.**

<br>

### Many to Many Through

Each **playlist** can, in addition, also track how many **plays** a song has had.

For that the join table will need an additional column, `plays`. Any columns in the join table tell you _about_ the relationship between the related models. In this case, `plays` is extra information _about_ the relation of a song to a playlist.

![](https://i.imgur.com/GhAZKec.png)

What can we say _about_ Song 2 in Playlist 4? We can say it has 3 plays.

What we can we say _about_ Playlist 6's relationship to that same song? We can say that Playlist 6 has 99 plays of that song.

<br>
<hr>

# Do the lab on Playlists and Songs

11:45 / 12:00

## VALIDATIONS - Duplicates

If you create a Ledger that is a duplicate of a relationship between a trader and commodity, it will make another entry exactly the same.

Run this twice to create duplicates:

![](https://i.imgur.com/lCa08UF.png)

Run a query to see all ledgers formatted on own lines:

![](https://i.imgur.com/pbp2V0Z.png)

See the duplicate entries:

![](https://i.imgur.com/YnG5IBN.png)

We would want to think that pairings of trader-commodity would be unique, but they are not. Does Trader 1 have 8 of commodity 5, or 16 of commodity 5?

![](https://i.imgur.com/EQ4FQWz.png)

Use a validation, either `  validates_uniqueness_of :commodity_id, scope: :trader_id`

or

`validates_uniqueness_of :trader_id, scope: :commodity_id`

![](https://i.imgur.com/l4z1fRB.png)

Now, Trader 1 can not have two entries of Commodity 8 or vice versa.

If we try add a duplicate, we'll get an error

![](https://i.imgur.com/dumrTP7.png)

We can destroy ledgers we don't want:

![](https://i.imgur.com/tkEGLMx.png)

<br>

12:15

PLAYLISTS APP activity

* Make it so song 2 cannot be added to playlist 2 more than once, and no song can be added to a playlist more than once.


12:00 - done

<br>
<hr>
License
<hr>

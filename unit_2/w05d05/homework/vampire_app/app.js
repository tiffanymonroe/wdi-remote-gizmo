// 1. Require your node modules
const mongoose = require('mongoose');


// 2. Require your model (and possibly your extra data source);

const Vampire = require('./models/vampire.js');
const vampireData = require('./models/populateVampires.js')
// 3. Connect your database and collection name


// 4. Open your mongoose connection
const db = mongoose.connection;

db.once('open', ()=>{
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
Vampire.collection.insertMany(vampireData,(err, data) => {
    console.log("added provided vampire data")

// ### Add some new vampire data
Vampire.create({
  name: 'Angelus',
  hair_color: 'brown',
  eye_color: 'brown',
  dob: 1727,
  loves: ["torture", "Buffy", "Connor", "Cordelia"],
  location: "Europe and the US",
  gender: 'm',
  victims: 100000
}),

Vampire.create({
  name: 'Darla',
  hair_color: 'blonde',
  eye_color: 'blue',
  dob: 1585,
  loves: ["Angelus", "The Master"],
  location: "Europe and the US",
  gender: 'f',
  victims: 90000
}),

Vampire.create({
  name: 'Drusilla',
  hair_color: 'brown',
  eye_color: 'blue',
  dob: 1840,
  loves: ["torture", "Spike", "Angelus"],
  location: "Europe and the US",
  gender: 'f',
  victims: 80000
}),

Vampire.create({
  name: 'Spike',
  hair_color: 'Billy Idol blonde',
  eye_color: 'blue',
  dob: 1855,
  loves: ["torture", "Drusilla", "Buffy"],
  location: "Europe and the US",
  gender: 'm',
  victims: 100000
}), (error, vampire) => {
      if (error) {
        console.log(error);
      } else {
        console.log(vampire);
      }
      mongoose.connection.close();
    }
  });
});
/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

Vampires.find(
  {gender: 'f'},
  (error, vampires)=>{
    console.log(vampires);
  },
  {multi: true}
);

Vampires.find(
  {victims:
      {
        $gt: 500
      }
  },
  {multi: true}
);

Vampires.find(
  {victims:
      {
        $lt: 150
      },
      {
        $gt: 500
      }
  },
  {multi: true}
);

Vampires.find(
  {victims:
      {
        $gt: 500
      },
  },
  {multi: true}
);




/////////////////////////////////////////////////
// ### Select by exists or does not exist



/////////////////////////////////////////////////
// ### Select with OR

// { $or: [
//       {location:
//         {$eq: 'New York, New York, US'}
//       }, {location:
//         {$eq: 'New Orleans, Louisiana, US'}
//       }
// ]}

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////

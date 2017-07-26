//IMPORTANT NOTES ABOUT THIS HW SOLUTION:
//Some of the queries/questions were slightly modified to better match the provided data
//the commented out text in this file should match the query demonstrated (again may not match the initial hw)

//to test out these answers only comment in/out exactly what you want- one at a time, otherwise you may populate your db with duplicates, or confound your console.logs

//be careful to not comment back in lines that are ment to be comments or else -errors!

//the following lines may stay commented in:**************************

// 1. Require your node modules
const mongoose      = require( 'mongoose' );

// 2. Require your model (and possibly your extra data source);
// require the Item model
const Vampire       = require( './models/vampire.js' );
// Vampire data file
const vampireData   = require( './populateVampires.js' );
// console.log( vampireData );

// 3. Connect your database and collection name
mongoose.connect( 'mongodb://localhost:27017/vampires' );

// 4. Open your mongoose connection
mongoose.connection.once( 'open', () => {
  console.log( "database is connected" );
});

//end commented in commands***************************


//The following commands should only be commented back in when you want to test them out (and comment them out before trying the next one):



/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.
// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////

// // Drop database from this app (CAUTION: cannot undo!):
 // Vampire.collection.drop();

//  //Insert using Mongoose
// // ### Add the vampire data that we gave you

// Vampire.collection.insertMany( vampireData,
//   ( err, data ) => {
//     console.log( "added provided vampire data" )
//     mongoose.connection.close();
//   }
// );


// //### Add some new vampire data

//   Vampire.create({
//     name: "Karolin",
//     hair_color: "blonde",
//     dob: new Date(1860, 1, 11, 1, 2),
//     loves: ["kittens", "hair screws"],
//     location: "Outer Space",
//     gender: "f",
//     victims: 0},
//   {
//     name: "Kristyn",
//     hair_color: "brown",
//     dob: new Date(1841, 21, 10, 5, 3),
//     loves: ["kittens", "chocolate"],
//     location: "Brooklyn, NY",
//     gender: "f",
//     victims: 5687
//   },
//   {
//     name: "Thom",
//     hair_color: "red",
//     dob: new Date(1836, 8, 8),
//     loves: ["kittens", "soup"],
//     location: "Brooklyn, NY",
//     gender: "m",
//     victims: 100
//   },
//   {
//     name: "Matt",
//     loves: ["kittens", "saxamaphone"],
//     gender: "m",
//     victims: 2
//   }, (err, data) => {
//     console.log("we've created vampies!");
//     // This link will close the database connection:
//     mongoose.connection.close();
// });

//////////////////////////////////////////////
/////////////////////////////////////////////////

// // ## Querying
//  //### Select by comparison

//  //1. Find all the vampires that that are females
// Vampire.find(
//   { gender : 'f' },
//     ( err, data ) => {
//       console.log( data );
//       mongoose.connection.close();
//   });


// //2. have greater than 500 victims

// Vampire.find(
//   {victims: { $gt : 500 } },
//    ( err, data ) => {
//       console.log( data );
//       mongoose.connection.close();
// });


// //3. have fewer than or equal to 150 victims

// Vampire.find(
//   { victims : { $lte : 150 } },
//   ( err, data ) => {
//     console.log( data );
//     mongoose.connection.close();
// });


// //4. have a victim count is not equal to 210234

// Vampire.find(
//    { victims : { $ne: 210234 } },
//     ( err, data ) => {
//       console.log( data );
//       mongoose.connection.close();
// });


// //5. have greater than 150 AND fewer than 500 victims

// Vampire.find(
//   { victims : { $gt : 150, $lt : 500 } },
//   ( err, data ) => {
//     console.log( data );
//     mongoose.connection.close();
// });


/////////////////////////////////////////////////
// Select by exists or does not exist
//
// //Select all the vampires that:

// //1. have a title property

// Vampire.find(
//    { title : { $exists: true } },
//    ( err, data ) => {
//     console.log( data );
//     mongoose.connection.close();
// });

// //2. do not have a victims property

// Vampire.find(
//   {victims: { $exists : false } },
//   ( err, data ) => {
//     console.log( data );
//     mongoose.connection.close();
// });

// //3. have a title AND no victims

// Vampire.find(
//    { title  : { $exists : true },
//     victims : { $exists : false } },
//    ( err, data ) => {
//      console.log(data);
//      mongoose.connection.close();
// });

// //4. have victims AND the victims they have are greater than 1000

// Vampire.find(
//    { victims :
//      { $exists : true,
//        $gt     : 1000}
//    },
//    ( err, data ) => {
//     console.log( data );
//     mongoose.connection.close();
// });

/////////////////////////////////////////////
// //### Select with OR
//1. are from New York, New York, US or New Orleans, Louisiana, US

// Vampire.find(
//    { $or :[ { location : 'New York, New York, US' },
//             { location :'New Orleans, Louisiana, US' } ]
//    }, ( err, data ) => {
//         console.log( data );
//         mongoose.connection.close();
// });


// //2. love brooding or being tragic

// Vampire.find(
//    { $or: [ { loves : 'brooding' },
//             { loves : 'being tragic' } ]
//    },
//    ( err, data ) => {
//     console.log( data );
//     mongoose.connection.close();
// });


// //3. have more than 1000 victims or love marshmallows

// Vampire.find(
//    { $or :
//      [ { victims : { $gt : 1000} },
//        { loves   : 'marshmallows'} ]
//    },
//    ( err, data ) => {
//     console.log( data );
//     mongoose.connection.close();
// });


// //4. have red hair or green eyes

// Vampire.find(
//   { $or :
//    [ { hair_color : 'red' } ,
//      { eye_color  : 'green' } ]
//   },
//    ( err, data ) => {
//     console.log( data );
//     mongoose.connection.close();
// });


/////////////////////////////////////////////////SELECT OBJECTS THAT MATCH ONE OF SEVERAL VALUES

// //1. love either frilly shirtsleeves or frilly collars
// Vampire.find(
//   { $or:
//      [ { loves : 'frilly shirtsleeves' },
//        { loves : 'frilly collars' } ] },
//   ( err, data )  => {
//     console.log( data );
//     mongoose.connection.close();
// });

// //2. love brooding

// Vampire.find(
//   { loves : 'brooding' },
//   ( err, data )  => {
//     console.log( data );
//     mongoose.connection.close();
// });


// //same as above, using $in operator, as an alternative
// Vampire.find(
//   { loves :
//     { $in : [ 'brooding' ] } },
//   ( err, data )  => {
//     console.log( data );
//     mongoose.connection.close();
// });


// //3. love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
// Vampire.find(
//   { $or:
//      [ { loves : 'appearing innocent' },
//        { loves : 'trickery' },
//        { loves : 'lurking in rotting mansions' },
//        { loves : 'R&B music'}] },
//   ( err, data ) => {
//     console.log( data );
//     mongoose.connection.close();
// });


// //4. love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You may also have to use $nin * (following example did not use $nin)

// Vampire.find(
//   {$and : [
//     { loves : 'fancy cloaks'},
//     { loves : { $ne : 'top hats'} },
//     { loves : { $ne : 'virgin blood'} }
// ]},
//   ( err, data ) => {
//     console.log('data this is ', data);
//     mongoose.connection.close();
//   });


/////////////////////////////////////////////////NEGATIVE SELECTORS

// ## Negative Selection
//1. love ribbons but do not have brown eyes

// Vampire.find(
//   { $and : [
//   { loves     : 'ribbons'} ,
//     {eye_color: { $ne : 'brown'} }  ]
//   },
//   ( err, data ) => {
//     console.log( data );
//     mongoose.connection.close();
//   });


// 2. are not from Rome
// Vampire.find(
//   { location :
//     { $ne : "Rome, Italy" } },
//   ( err, data) => {
//     console.log('this is err ', err)
//     console.log ( data );
//     mongoose.connection.close();
//   });


//3. do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
// Vampire.find(
//   { $nor  :
//     [ {loves :  'fancy cloaks'},
//       {loves :   'frilly shirtsleeves'},
//       {loves :   'appearing innocent'},
//       {loves :   'being tragic'},
//       {loves :   'brooding'}
//    ]},
//   ( err, data ) => {
//     console.log( err );
//     console.log( data );
//     mongoose.connection.close();
// });


// 4. have not killed more than 200 people
// Vampire.find(
//   { victims: { $not: { $gt: 200 } } },
//   ( err, data ) => {
//     console.log( data );
//     mongoose.connection.close();
//   }
// );

/////////////////////////////////////////////////REPLACE

//1. replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'

// Vampire.collection.findOneAndUpdate(
//   { name   : 'Claudia' },
//   { $set :
//      { name   : 'Eve',
//        portrayed_by  : 'Tilda Swinton' } },
//   // { upsert : false },
//   (err, data)  => {
//     console.log(data)
//     mongoose.connection.close();
//   }
// );


//2. replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'

// Vampire.collection.findOneAndUpdate(
//   { gender : 'm' },
//   { $set :
//       { name  : 'Guy Man',
//         is_actually : 'were-lizard'} },
//   ( err, data )  => {
//     console.log( data );
//     mongoose.connection.close();
//   }
// );


/////////////////////////////////////////////////

// //## Update

// //1. Update 'Guy Man' to have a gender of 'm'

// Vampire.updateOne(
//    { name : 'Guy Man'} ,
//    { $set : { gender: 'm' } },
//    ( err, data ) => {
//     console.log( data );
//     mongoose.connection.close();
//   }
// );


// //2. Update 'Eve' to have a gender of 'f'

// Vampire.updateOne(
//    { name : 'Eve' },
//    { $set : { gender :'f' } },
//    ( err, data ) => {
//     console.log( data );
//     mongoose.connection.close();
// });


// //3. Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'

// Vampire.updateOne(
//    { name : 'Guy Man' },
//    { $set :
//       { hates : [ 'clothes' , 'jobs' ] } },
//    ( err, data ) => {
//     console.log ( data );
//     mongoose.connection.close();
//   }
// );


// 4. Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'

// Vampire.collection.updateOne(
//   { name: 'Guy Man' },
//   { $push :
//    { hates :
//      { $each :
//         [ 'alarm clocks', 'jackalopes' ] } }
//       }, ( err, data )  => {
//         console.log( data );
//         mongoose.connection.close();
//       }
// );


//5. Rename 'Eve's' name field to 'moniker'

// Vampire.collection.updateOne(
//    { name : 'Eve' },
//    { $rename : { name: 'moniker' } },
//    ( err, data ) => {
//     console.log( data );
//     mongoose.connection.close();
// }
//);


// 6/ We now no longer want to categorize female gender as "f", but rather as fems. Update all females so that the they are of gender "fems".

// Vampire.update (
//    { gender : 'f' },
//    { $set :
//      { gender : 'fems'}
//    },
//    // multi - updates multipe documents if set to true
//    { multi: true },
//    ( err, data ) => {
//     console.log( data );
//     mongoose.connection.close();
//   }
// );

/////////////////////////////////////////////////

// //## Remove

// 1. Remove a single document wherein the hair_color is 'brown'
// Vampire.findOneAndRemove(
//    { gender : 'm' }, true,
//    ( err, data ) => {
//       console.log( data );
//       mongoose.connection.close();
//     }
// );


// 2. We found out that the vampires with the blue eyes were just fakes! //Let's remove all the vampires who have blue eyes from our database.

// Vampire.remove (
//    { eye_color : 'blue' },
//     ( err, data ) => {
//       console.log( data );
//       mongoose.connection.close();
//     }
// );

/////////////////////////////////////////////////

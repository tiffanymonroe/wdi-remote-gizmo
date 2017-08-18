//////////////////////////////////////////////////////
// SET UP angular/controller - commit 2
//////////////////////////////////////////////////////
const app           = angular.module('worldbank', []);

app.controller ( 'mainController' , [ '$http' , function ( $http ){


    //freeze value of this in the variable controller
    const controller      = this;

    let currentRegion   = '';
    let currentRecord   = '';

//////////////////////////////////////////////////////
// FORM SHOW-HIDE LOGIC
//////////////////////////////////////////////////////
  this.toggle           = true;

  //on load see regions and new form
  //on record view, click record, hide records, show one record on left
  //record will show on the left, regions will hide
  //form will show on the right, new form will hide
  //on update/delete form will hide, regions show, new show
  //NOTE: Toggle views by clicking on <h1>


  this.toggleView =  () => {
    this.toggle = !this.toggle;
  };

//////////////////////////////////////////////////////
// get number of records - commit 3
//////////////////////////////////////////////////////

    this.count    =  () => {
      $http({
        method    : 'GET',
        url       : '/wbinfo' + '/count'
      }).then (
        ( response ) => {
          //as ctrl.recordsNumber in index.html
          controller.recordsNumber = response.data;
        } ,  ( error ) =>  {
          console.log( error );
        }
      )
    };

    //load immediately onto page
    this.count();

//////////////////////////////////////////////////////
// get country/region names - commit 4
//////////////////////////////////////////////////////

    this.getUniqueRegions =  () => {
      $http({
        method    : 'GET',
        url       :  '/wbinfo' + '/uniqueRegions'
      }).then (
         ( response ) => {
          //as ctrl.uniqueRegions in index.html
          // access individual as region in ng-repeat
          controller.uniqueRegions = response.data;
        } ,  ( error ) => {
          console.log( error );
        }
      );
    };

    //load immediately onto page
    this.getUniqueRegions();

//////////////////////////////////////////////////////
//on region click show records for that region
// commit 5
//////////////////////////////////////////////////////

    this.recordsForRegion =  ( region ) => {
      currentRegion = region;
      $http({
        method    : 'GET',
        url       : '/wbinfo' + '/byName/' + region
      }).then(
         ( response ) => {
          //as ctrl.records in index.html
          // access individual as record in ng-repeat
          controller.records = response.data;
        } , function ( error ){
          console.log( error )
        }
      );
    };

//////////////////////////////////////////////////////
// Create New Record - Form - commit 7
//////////////////////////////////////////////////////
   //access via ng-model in forms ie: ctrl.region
    this.formdata = {};

    // Add New Record
    this.processForm =  () => {
      $http({
        method: 'POST',
        url   : '/wbinfo',
        //data to send to db (this.formdata, but inside function so need to use `controller` instead of `this`)
        data  : controller.formdata
      }).then( ( response ) => {
          //SUCCESS! Do these things to 'live update the page so user knows that the create was successful'

          //update page immediately to show record was added by increasing recordsNumber
          controller.recordsNumber++;

          //check if region does not exist
          let checkToUpdate = controller.uniqueRegions.every( function ( e ){
            return e !== response.data.region;
          });

          //if region does not exist, push to region array to see live update
          //this eliminates ng-repeat:dupes error
          if ( checkToUpdate ){
            controller.uniqueRegions.push( response.data.region );
          }

          //reset form on submit
          controller.formdata = {};
        } ,  ( error ) => {
          console.log( error );
        });
    }

//////////////////////////////////////////////////////
// SHOW 1 - HUNGRY FOR MORE
// Needed a place to grab data from one record
// in order to do update
// many other ways to solve
//////////////////////////////////////////////////////
        //ng-click ctrl.getOne(record)
        // where record value is from ng-repeat
        //this is in a div w class 'show-one-record'
        //default is ng-hide='true'
        this.getOne = function ( record ){
          currentRecord = record;
          this.showOne = {
             region          : record.region,
             projectabstract : record.projectabstract,
             projectname     : record.projectname,
             year            : record.year,
             loanamnt        : record.loanamnt,
             id              : record._id
          };
          console.log(this.showOne.id);
        }


//////////////////////////////////////////////////////
// UPDATE - Form - HUNGRY FOR MORE
//////////////////////////////////////////////////////

    //the update form is hidden until the user chooses a record
    //multiple ways to pass id/get id
    //since id is not something I want the user to change, I passed it in like this
    //could have also made an input hidden with the value
    this.formdataUpdate = {};
    this.update =  ( id ) => {
        $http({
          method    : 'PUT',
          url       : '/wbinfo/' + id,
          data      : controller.formdataUpdate
        }).then (  ( response ) => {
          //update front end to represent updated record
          const frontEndUpdate =  function ( recordObject ) {
             let compare = Object.values( this ).join( '' );
             return recordObject._id === compare;
          }

          console.log('current recored', currentRecord);
          console.log(frontEndUpdate);
          let updateThisRecord = controller.records.find( frontEndUpdate, currentRecord._id );


            for ( value in currentRecord ){
              if ( response.data[ value ] ){
                updateThisRecord[ value ] =
                 response.data[ value ];
              }
            }

            //if the region has been updated to a new one reflect that in regions list
            //check if region does not exist
            let checkToUpdate = controller.uniqueRegions.every( function ( e ){
              return e !== response.data.region;
            });

            //if region does not exist, push to region array to see live update
            //this eliminates ng-repeat:dupes error
            if ( checkToUpdate ){
              controller.uniqueRegions.push( response.data.region );
            }

          //reset the form after submit
           controller.formdataUpdate = {};
        } ,  ( error ) => {
          console.log( error );
        });
      };


//////////////////////////////////////////////////////
// DELETE - Form - HUNGRY FOR MORE
//////////////////////////////////////////////////////

    this.delete = ( id ) => {
      $http({
        method: 'DELETE',
        url   : '/wbinfo/' + id,
        data  : id
      }).then ( function ( data ){
        //an alternative way to get updates on the page after/create/update/destroy
        //use get requests, but more trips to the server
        controller.getUniqueRegions();
        controller.recordsForRegion( currentRegion );
        //decrease the number of records
        controller.recordsNumber--;
      } ,  ( error ) => {
        console.log( error );
      });
    }

}]);

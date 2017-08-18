(function() {

  angular.module('trading_app', [])
  .controller('mainController', ['$http', function($http) {

      this.traders = [];
      this.commodities = [];

      $http({
        method: 'GET',
        url: 'http://localhost:3000/traders'
      }).then(function(result) {
          console.log('traders from api: ', result);
          this.traders = result.data;
      }.bind(this), function(error) {
          console.log(error);
      });

      $http({
        method: 'GET',
        url: 'http://localhost:3000/commodities'
      }).then(function(result) {
          console.log('commodities from api: ', result);
          this.commodities = result.data;
      }.bind(this), function(error) {
          console.log(error);
      });

    }]);

}());

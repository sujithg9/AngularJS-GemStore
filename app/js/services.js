'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('gemStore.services', []).
value('version', '0.1').
service('gemStoreDataService', function ($http) {
  this.getGems = function () {
    delete $http.defaults.headers.common['X-Requested-With'];
    $http.get('data/store-products.json').sucess(function (data) {              
      return data;
    }).error(function () {
      alert("Ooops, something went wrong. Not able to fetch Gems data.... :-(");
    })
  };
});

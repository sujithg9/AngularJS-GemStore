'use strict';

/* Controllers */

angular.module('gemStore.controllers', [])
.controller('GemsStoreController',['$scope', '$http', function ($scope, $http) {
 $http.get('data/store-products.json').success(function(data) {
   $scope.gems=data;
 }).error(function () {
  alert("Ooops, something went wrong. Not able to fetch Gems data.... :-(");
});
//gemStoreDataService.getGems();
}])
.controller('GemsDetailsController', ['$scope', function ($scope) {
  $scope.currentTab = 1;

  $scope.setTab = function (value) {
    $scope.currentTab = value;
  };

  $scope.isCurrentTab = function (value) {
    if ($scope.currentTab === value) return true;
    else return false;
  };
}])
.controller('ReviewController', ['$scope', function ($scope) {
  $scope.review = {};

  $scope.addReview = function (product) {
    product.reviews.push($scope.review);
    $scope.review = {};
  };
}]);

'use strict';

/* Directives */


angular.module('gemStore.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive('imageGallery', function () {
      return {
          restrict: 'E',
          templateUrl: 'partials/image-gallery.html',
          controller: function ($scope) {
              $scope.currentImage = '';

              $scope.setCurrentImage = function (value) {
                  $scope.currentImage = value;
                  alert($scope.currentImage);
              };
          },
          controllerAs: 'imgController'
      };
  }).
  directive('gemSpecs', function () {
      return {
          restrict: 'A',
          templateUrl: 'partials/gem-specs.html'
      };
  }).
  directive('gemsReviews', function () {
      return {
          restrict: 'E',
          templateUrl: 'partials/gem-reviews.html'
      };
  });

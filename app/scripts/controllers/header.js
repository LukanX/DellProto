'use strict';


angular.module('dellProtoApp')
  .controller('HeaderCtrl', function ($scope) {
    $scope.showBrowseCoupons = false;
    $scope.showIdeas = false;
    $scope.showAccount = false;
    $scope.showCountries = false;
  });
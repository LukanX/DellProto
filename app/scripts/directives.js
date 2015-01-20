'use strict';

angular.module('dellProtoApp')
  .directive('siteHeader', function () {
    return{
    	restrict: 'E',
    	templateUrl: 'views/templates/site-header.html'
    };
  });
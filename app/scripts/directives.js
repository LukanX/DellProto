'use strict';

angular.module('dellProtoApp')
  .directive('siteHeader', function () {
    return{
    	restrict: 'E',
    	templateUrl: 'views/templates/site-header.html'
    };
  })
  .directive('mobileSiteHeader', function(){
  	return{
  		restrict: 'E',
  		templateUrl: 'views/templates/mobile-site-header.html'
  	};
  });
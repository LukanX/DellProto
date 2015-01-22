'use strict';

/**
 * @ngdoc overview
 * @name dellProtoApp
 * @description
 * # dellProtoApp
 *
 * Main module of the application.
 */
angular
  .module('dellProtoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'timer'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/product', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl'
      })
      .when('/mobile', {
        templateUrl: 'views/mobile-home.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

'use strict';

/**
 * @ngdoc overview
 * @name trainingAssistantApp
 * @description
 * # trainingAssistantApp
 *
 * Main module of the application.
 */
var app = angular.module('trainingAssistantApp', [
  'ngAnimate',
  'ui.router',
  'ngTouch'
]);

app.config(function($stateProvider) {
  $stateProvider
    .state('home', {
      url: '',
      controller: 'MainCtrl as main',
      templateUrl: 'views/main.html'
    })
    .state('intro', {
      url: '/intro',
      controller: 'MainCtrl as main',
      templateUrl: 'views/intro.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl as about',
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'views/dashboard.html',
      controller: 'DashboardCtrl as dashboard'
    })
    .state('bodycomp', {
      url: '/bodycomp',
      templateUrl: 'views/bodycomp.html',
      controller: 'BodyCompCtrl as bodycomp'
    })
    .state('targethr', {
      url: '/targethr',
      templateUrl: 'views/heartrate.html',
      controller: 'TargetHRCtrl as targethr'
    })
});
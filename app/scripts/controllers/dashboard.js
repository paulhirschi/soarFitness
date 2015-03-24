/**
 * @ngdoc function
 * @name trainingAssistantApp.controller:AboutCtrl
 * @description
 * # BMICtrl
 * Controller of the trainingAssistantApp
 */
'use strict';
app.controller('DashboardCtrl', ['$scope', 'appService',
  function($scope, appService) {

    $scope.client = appService.client;

  }
]);
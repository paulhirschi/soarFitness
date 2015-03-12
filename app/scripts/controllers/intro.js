'use strict';

/**
 * @ngdoc function
 * @name trainingAssistantApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the trainingAssistantApp
 */
app.controller('IntroCtrl', ['$scope', 'appService',
  function($scope, appService) {

    $scope.client = appService.client;



  }
]);
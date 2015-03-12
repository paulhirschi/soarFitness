'use strict';

/**
 * @ngdoc function
 * @name trainingAssistantApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trainingAssistantApp
 */
app.controller('MainCtrl', ['$scope', '$state', 'appService',
  function($scope, $state, appService) {

    $scope.client = appService.client;
    $scope.submitLogin = function() {
      appService.client.name = $scope.client.name;
      appService.client.age = $scope.client.age;
      appService.login();
      $state.go('intro');
    };

  }
]);
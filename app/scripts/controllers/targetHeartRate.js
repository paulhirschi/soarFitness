'use strict';

/**
 * @ngdoc function
 * @name trainingAssistantApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the trainingAssistantApp
 */
app.controller('TargetHRCtrl', ['$scope', 'appService',
  function($scope, appService) {

    $scope.client = appService.client;
    $scope.getThr = function(min, max, zone) {
      appService.getThr(min, max, zone);
      $scope.client.thr = appService.client.thr;
    }


  }
]);
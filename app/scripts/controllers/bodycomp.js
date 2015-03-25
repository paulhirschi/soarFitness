'use strict';

/**
 * @ngdoc function
 * @name trainingAssistantApp.controller:AboutCtrl
 * @description
 * # BMICtrl
 * Controller of the trainingAssistantApp
 */
app.controller('BodyCompCtrl', ['$scope', 'appService',
  function($scope, appService) {

    $scope.client = appService.client;

    $scope.bmiCalc = function() {
      appService.bmiHeight = $scope.bmiHeight;
      appService.getBMI();
      $scope.client.bmi = appService.client.bmi;
      $scope.client.weight = appService.client.weight;
      $scope.bmiHeight = '';
    };

    $scope.bodyFatCalc = function() {
      appService.client.bodyFatBi = $scope.bodyFatBi;
      appService.client.bodyFatTri = $scope.bodyFatTri;
      appService.client.bodyFatSub = $scope.bodyFatSub;
      appService.client.bodyFatIliac = $scope.bodyFatIliac;
      appService.bodyFatCalc();
      $scope.client.fatPercent = appService.client.fatPercent;
      $scope.bodyFatBi = '';
      $scope.bodyFatTri = '';
      $scope.bodyFatSub = '';
      $scope.bodyFatIliac = '';
    };

    $scope.idealWeightCalc = function() {
    appService.client.desiredPerc = $scope.client.desiredPerc;
      appService.idealWeightCal();
      $scope.client.idealWeight = appService.client.idealWeight;
      $scope.desiredPerc = '';
    };

  }
]);
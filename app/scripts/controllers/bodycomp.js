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
      appService.bmiWeight = $scope.bmiWeight;
      appService.bmiHeight = $scope.bmiHeight;
      appService.getBMI();
      $scope.client.bmi = appService.client.bmi;
      $scope.client.weight = appService.client.weight;
      $scope.bmiWeight = '';
      $scope.bmiHeight = '';
    };

    $scope.bodyFatCalc = function() {
      appService.bodyFatBi = $scope.bodyFatBi;
      appService.bodyFatTri = $scope.bodyFatTri;
      appService.bodyFatSub = $scope.bodyFatSub;
      appService.bodyFatIliac = $scope.bodyFatIliac;
      appService.bodyFatCalc();
      $scope.client.fatPercent = appService.client.fatPercent;
      $scope.bodyFatBi = '';
      $scope.bodyFatTri = '';
      $scope.bodyFatSub = '';
      $scope.bodyFatIliac = '';
    };

    $scope.idealWeightCalc = function() {
      appService.desiredPerc = $scope.desiredPerc;
      appService.idealWeightCal();
      $scope.client.idealWeight = appService.client.idealWeight;
      $scope.desiredPerc = '';
    };

  }
]);
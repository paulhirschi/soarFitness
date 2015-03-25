'use strict';

/**
 * @ngdoc overview
 * @name trainingAssistantApp
 * @description
 * # trainingAssistantApp
 *
 * Main module of the application.
 */
app.controller('NavCtrl', ['$scope', '$rootScope', '$state', 'appService',
  function($scope, $rootScope, $state, appService) {

    $scope.client = appService.client;

    $scope.$watch(function() {
      return appService.client;
    }, function(newVal) {
      $scope.client = newVal;
      console.log($scope.client);
    });

    $scope.resetApp = function() {
      $scope.client = {};
      appService.client = $scope.client;
    };

    $scope.menu = [{
      label: 'Dashboard',
      state: 'dashboard'
    }, {
      label: 'Target HR',
      state: 'targethr'
    }, {
      label: 'Body Composition',
      state: 'bodycomp'
    }, {
      label: 'About',
      state: 'about'
    }];


  $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams) {
      $scope.showMenu = false;
      if ($scope.client.isLoggedIn) {
        return
      }
      if (toState.name === 'home') {
        return
      }
      if (!$scope.client.isLoggedIn) {
        event.preventDefault();
        $state.go('home');
      }
    });
  }
]);
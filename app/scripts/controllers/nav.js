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
      label: 'Target HR',
      state: 'targethr'
    }, {
      label: 'Body Composition',
      state: 'bodycomp'
    }, {
      label: 'Dashboard',
      state: 'dashboard'
    }, {
      label: 'About',
      state: 'about'
    }];


    $rootScope.$on('$stateChangeStart',
      function(event, toState, toParams, fromState, fromParams) {
        var isHome = toState.name === 'home';
        $scope.showMenu = false;
        console.log('state change start');
        // if ($scope.client.isLoggedIn) {
        //   return;
        // } else if (isHome) {
        //   return
        // } else {
        //   console.log('resetApp');
        //   $state.go('home');
        //   event.preventDefault;
        // }
      });



  }
]);
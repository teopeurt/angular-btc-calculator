'use strict';

/**
 * @ngdoc function
 * @name myAngularProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAngularProjectApp
 */
angular.module('myAngularProjectApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
       // attaching 0 to the DOM
      $scope.somenumber = 320;
  }]);

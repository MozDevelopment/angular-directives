(function() {
    'use strict';

    angular.module('directives')
            .directive('address', address);


            function address() {
              return {
                restrict: 'E',
                templateUrl: 'templates/address.html',
                controller: AddressController,
                scope: true
              }

              function AddressController($scope) {
                $scope.collapsed = false;
                $scope.collapseAddress = function() {
                  $scope.collapsed = true;
                }
                $scope.expandAddress = function() {
                  $scope.collapsed = false;
                }
              }
            }

})();

(function() {
    'use strict';

    angular.module('directives')
          .directive('userTile', userTile);

          function userTile() {
            return {
              restrict: 'E',
              scope: {
                user: '='
              },
              templateUrl: 'templates/userTile.html',
              controller: userTile
            }

            function userTile($scope) {  
              $scope.selectTile = function() {
                  $scope.user.selected = !$scope.user.selected;
              }
            }// userInteraction


          }//userTile
})();

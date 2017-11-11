(function() {
  'use strict';

    angular.module('directives')
          .directive('removeFriend', removeFriend);

          function removeFriend() {
              return {
                restrict: 'E',
                templateUrl: 'templates/remove-friend.html',
                controller: removeController,
                scope: {
                  notifyParent: '&method'
                }
              }
              function removeController($scope) {
                $scope.removing = false;
                $scope.startRemoving = function() {
                  $scope.removing = true;
                }
                $scope.cancel = function() {
                  $scope.removing = false;
                }
                $scope.confirmRemove = function() {
                  // $scope.notifyParent();

                  //Override paramaters
                  $scope.notifyParent({friend: 'Mauro'})
                }
              }
          }//userRemoveCard
})();

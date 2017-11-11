(function() {
    'use strict';

    angular.module('directives')
            .directive('userRemoveCard', userRemoveCard);

            function userRemoveCard() {
              return {
                restrict: 'E',
                templateUrl: 'templates/userInfoCardRemoveFriend.template.html',
                controller: UserCardControllerI,
                scope: {
                  user: '=',
                  // collapsed: '@'//when paramaters use same name within the code
                  initialCollapsed: '@collapsed'
                }
              }
              function UserCardControllerI($scope) {
                $scope.collapsed = ($scope.initialCollapsed === 'true');
                $scope.promoteMeI = function(user) {
                  user.rank = "Promoted";
                }
                $scope.collapse = function(user) {
                  $scope.collapsed = !$scope.collapsed;
                }
                $scope.removeFriend = function(friend) { 
                  var index = $scope.user.friends.indexOf(friend);
                  if(index > -1)
                    $scope.user.friends.splice(index, 1);
                }
              }
            }//userRemoveCard
})();

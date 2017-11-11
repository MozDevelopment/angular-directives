(function() {
    'use strict';

    angular.module('directives')
          .directive('userInfoCardController',userInfoCardController)
          .directive('userInfoCardInheritanceController',userInfoCardInheritanceController)
          .directive('userInfoCardIsolatedController',userInfoCardIsolatedController);

        function userInfoCardController() {
          // console.log(this);
            return {
              restrict: 'EA',
              // templateUrl: 'templates/userInfoCard.html'
              templateUrl: 'templates/userInfoCard.template.html',
              controller: UserCarDController
            }
            function UserCarDController($scope) {
              //Demonstrating shared scope
              // console.info($scope);
              $scope.promoteMeC = function(user) {
                  $scope.user.rank = "Promoted";
              }
            }
        }//UserInfoCard

        function userInfoCardInheritanceController() {
          return {
            restrict: 'EA',
            templateUrl: 'templates/userInfoCard.template.html',
            controller: UserCardController,
            scope: true
          }
          function UserCardController($scope) {
            //Demonstratring $scope inherantec
            // console.info($scope);
            $scope.promoteMeC = function() {
              $scope.user.rank = "Promoted"
            }
          }
        }

        function userInfoCardIsolatedController() {
          return {
            restrict: 'E',
            // templateUrl: 'templates/userInfoCardScope.template.html', //1st Example
            templateUrl: 'templates/userInfoCardMethods.template.html',
            controller: UserCardControllerI,
            scope: {
              user: '=',
              // collapsed: '@'//when paramaters use same name within the code
              initialCollapsed: '@collapsed'
            }
          }
          function UserCardControllerI($scope) {
            //Demonstrating Isolated $scope
            // console.info($scope);
            // $scope.collapsed = false;
            // $scope.collapsedState = ($scope.initialCollapsed === 'true');
            $scope.collapsed = ($scope.initialCollapsed === 'true');
            $scope.promoteMeI = function(user) {
              user.rank = "Promoted";
            }
            $scope.collapse = function(user) {
              $scope.collapsed = !$scope.collapsed;
            }
            $scope.removing = false;
            $scope.startRemoving = function() {
              $scope.removing = true;
            }
            $scope.cancel = function() {
              $scope.removing = false;
            }
            $scope.removeFriend = function(friend) {
              console.info(friend);
              var index = $scope.user.friends.indexOf(friend);
              if(index > -1)
                $scope.user.friends.splice(index, 1);
            }
          }
        }//userInfoCardIsolatedController

})();

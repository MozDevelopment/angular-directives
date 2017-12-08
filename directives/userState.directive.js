(function() {
    'use strict';

    angular.module('directives')
          .directive('userTile', userTile)
          .directive('userState', userState)
          ,directive('stateDisplay', stateDisplay);

          function userTile() {
            return {
              restrict: 'E',
              scope: {
                user: '='
              },
              templateUrl: 'templates/userTile.html',
              controller: userTileC,
            }
            function userTileC($scope) {
              $scope.selectTile = function(user) {
                  user.selected = user.selected;
              }// userInteraction
            }//userTile
        }

        function userState() {
          return {
            restrict: 'E',
            scope: {
              user: '='
            },
            templateUrl: 'templates/userInfoState.template.html',
            controller: userStateC,
            link: function(scope, el, attrs) {
                scope.nextLevel = function() {
                  var vm = this;
                  vm.user.level++;
                  vm.user.level = vm.user.level % 3;
                  setState(vm.user);
                  }
                  function setState(user) {
                    switch (user.level) {
                      case 0:
                        el.find('.panel-heading').css('background-color', 'grey');
                        break;
                      case 1:
                        el.find('.panel-heading').css('background-color', 'orange');
                        break;
                      case 2:
                        el.find('.panel-heading').css('background-color', 'red');
                        break;
                    }
                }
                setState(scope.user);
            }
          }

          function userStateC($scope) {
            $scope.promoteMeI = function (user) {
              user.rank =  "Promoted";
            }
            $scope.removeFriend = function(friend) {
              var index = $scope.user.friends.indexOf(friend);
              if(index > -1)
                $scope.user.friends.splice(index);
            }
          }//userStateC
        }//userState

})();

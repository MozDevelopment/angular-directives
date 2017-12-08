(function() {
    'use strict';

    angular.module('directives')
          .directive('userState', userState);

          function userState() {
            return {
              restrict: 'E',
              scope: {
                user: '='
              },
              templateUrl: 'templates/userInfoState.template.html',
              controller: userTile
            }

            function userTile($scope) { 
          }//userTile
        }
})();

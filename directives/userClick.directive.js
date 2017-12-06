(function() {
    'use strict';

    angular.module('directives')
          .directive('userClickSelect', userClickSelect);

          function userClickSelect() { 
            return {
              link: userClick
            }

            function userClick(scope, el, attrs) {
                el.on('click', function() {
                    scope.user.selected = !scope.user.selected;
                    scope.$apply();
                });
            }//userClick

          }//userClickSelect
})();

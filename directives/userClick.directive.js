(function() {
    'use strict';

    angular.module('directives')
          .directive('userClickSelect', userClickSelect);

          function userClickSelect() {
            console.error(this);
            return {
              link: userClick
            }

            function userClick(scope, el, attrs) {
              console.error(scope);
              console.info('userClick');
                el.on('click', function() {
                    scope.user.selected = !scope.user.selected;
                    scope.$apply();
                });
            }//userClick 

          }//userClickSelect
})();

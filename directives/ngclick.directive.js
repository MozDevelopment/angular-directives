(function() {
    'use strict';

    angular.module('directives')
          .directive('myClick', myClick);

          myClick.$inject = ['$parse'];

          function myClick($parse) {
            return {
                link: handler
            }

            function handler(scope, el, attr) {
              var fn = $parse(attr['myClick']);
              el.on('click', function() {
                scope.$apply();
                fn(scope);
              });
            }

          }//myClick
})();

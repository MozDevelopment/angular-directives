(function() {
    'use strict';

    angular.module('directives')
            .directive('eventPause', eventPause);

    function eventPause() {
      return {
        restrict: 'A',
        scope: {
          eventPause: '&'
        },
        link: eventLink
      }

      function eventLink(scope, el, attrs) {
        el.on('pause', function(event) {
          scope.$apply(function() {
              scope.eventPause();
              console.log(scope)
          });
        });
      }
    }//spacebarSupport


})();

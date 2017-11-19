(function() {
    'use strict';

    angular.module('directives')
            .directive('eventPause', eventPause);

    eventPause.$inject = ['$parse'];

    function eventPause($parse) {
      return {
        restrict: 'A',
        scope: {
          eventPause: '&'
        },
        link: eventLink
      }

      function eventLink(scope, el, attrs) { 
        console.info(attrs);
        var fnPause = $parse(attrs['eventPause']);
        console.info(fnPause);
        el.on('pause', function(event) {
          scope.$apply(function() {
              scope.eventPause();
              fnPause(scope, {evt: event });
          });
        });
      }
    }//spacebarSupport


})();

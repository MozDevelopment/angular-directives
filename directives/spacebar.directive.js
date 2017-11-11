(function() {
    'use strict';

    angular.module('directives')
            .directive('spacebarSupport', spacebarSupport);

    function spacebarSupport() {
      return {
        restrict: 'A',
        link: spaceBarLink
      }

      function spaceBarLink(scope, el, attrs) {
        $('body').on('keypress', function(event) {
          console.log(event);
          if(event.keyCode === 32) {
            var vidEl = el[0];
            if(vidEl.paused) {
              vidEl.play();
            } else {
              vidEl.pause();
            }
          }
        });
      }
    }//spacebarSupport


})();

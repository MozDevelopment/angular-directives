(function() {
    'use strict';

    angular.module('directives')
          .directive('fontScale', fontScale);

          function fontScale() {
            return {
              link: changeScale
            };

            function changeScale(scope, ele, attrs) {
              console.info(ele);
              scope.$watch(attrs['fontScale'], function(newVal) {
                  ele.css('font-size', newVal+'%');
              });
            }

          }//fontScale
})();

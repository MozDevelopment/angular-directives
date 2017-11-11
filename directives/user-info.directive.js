(function() {
    'use strict';

    angular.module('directives')
            .directive('userInfoCard', userInfoCard);

    // userInfoCard

    function userInfoCard() {
      console.log(this);
        return {
          restrict: 'EA',
          // templateUrl: 'templates/userInfoCard.html'
          templateUrl: 'templates/userInfoCard.template.html'
        }
    }//UserInfoCard


})();

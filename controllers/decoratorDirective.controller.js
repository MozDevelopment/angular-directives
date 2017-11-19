(function() {
    'use strict';

    var app = angular.module('directives')
                      .controller('DecoratorController', DecoratorController);

    DecoratorController.$inject = ['$scope','$window','$locale'];
    function DecoratorController($scope, $window, $locale) {
        var vm = this;
        // console.log(vm);
        console.info($scope);

        vm.messages = [];

        vm.handlePause = function(evt) {
            console.log(evt);
            // vm.messages.push('paused!');  //This will create error in the Ng Repeat for duplicates
            vm.messages.push({text: 'paused!'});
        }



    }//DecoratorController

})();

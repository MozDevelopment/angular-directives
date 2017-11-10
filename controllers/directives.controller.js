(function() {
    'use strict';

    var app = angular.module('directives')
                      .controller('DirectivesController', DirectivesController);

    DirectivesController.$inject = ['$scope','$window','$locale'];
    function DirectivesController($scope, $window, $locale) {
        var vm = this;
        console.log(vm);

        vm.user = {
          scope: 'vm',
          name: 'Lars Albino Lemos',
          address: {
            street: 'Av. Eduardo Mondlane',
            city: 'Maputo',
            planet: 'Earth'
          },
          friends: [
            'Eugenio', 'Ivan', 'Eudson'
          ]
        };

        // $scope.user = {
        //   scope: '$scope',
        //   name: 'Lars Albino Lemos',
        //   address: {
        //     street: 'Av. Eduardo Mondlane',
        //     city: 'Maputo',
        //     planet: 'Earth'
        //   },
        //   friends: [
        //     'Eugenio', 'Ivan', 'Eudson'
        //   ]
        // };

        vm.title = 'Table of Contents';

        vm.list = ['userinfocard','userdirective',''];

        vm.go = function(listItem) {
          $window.location.href = "view/"+listItem+".html";
        }


    }//DirectivesController

})();

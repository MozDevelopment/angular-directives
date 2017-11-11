(function() {
    'use strict';

    var app = angular.module('directives')
                      .controller('DirectivesController', DirectivesController);

    DirectivesController.$inject = ['$scope','$window','$locale'];
    function DirectivesController($scope, $window, $locale) {
        var vm = this;
        // console.log(vm);
        console.info($scope);

        vm.user1 = {
          scope: 'vm',
          name: 'Lars Albino Lemos',
          address: {
            street: 'Av. Eduardo Mondlane',
            city: 'Maputo',
            planet: 'Earth'
          },
          friends: [
            'Eugenio', 'Ivan', 'Eudson', 'Mauro'
          ]
        };
        vm.user2 = {
          scope: 'vm',
          name: 'Eudson Xavier Bambo ',
          address: {
            street: 'Av. 24 de Julho',
            city: 'Maputo',
            planet: 'Earth'
          },
          friends: [
            'Lars', 'Edson'
          ]
        };

        $scope.user = {
          scope: '$scope',
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

        vm.title = 'Table of Contents';

        vm.list = ['userInfoCardPlain','userInfoCardPlainButton'
        ,'userInfoCardController'];

        vm.go = function(listItem) {
          $window.location.href = "views/"+listItem+".html";
        }

        vm.promoteMe = function(user) {
           vm.user.rank = "Promoted"
        }
        //Demonstrating shared scope
        // console.info($scope);


    }//DirectivesController

})();

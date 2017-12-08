(function() {
    'use strict';

    angular.module('directives')
            .controller('BussinessController', BussinessController);

            // BussinessController.$inject = [''];

            function BussinessController() {
                var vm = this;

                vm.user = {
                  scope: 'vm',
                  name: 'Tiago Guilherme Devesse Junior',
                  address: {
                    street: 'Av. Eduardo Mondlane',
                    city: 'Maputo',
                    planet: 'Earth'
                  },
                  friends: [
                    'Eugenio', 'Ivan', 'Eudson', 'Mauro'
                  ],
                  level: 1
                };

            }//bussinessController
})();

(function() {
  'use strict';

    var app = angular.module('directives', ['ui.router']);

    app.config(configureRouter);

    configureRouter.$inject = ['$stateProvider'];

    function configureRouter($stateProvider) {
        $stateProvider
          .state('directives', {
            url: '/user-card',
            templateUrl: ' directives.html',
            controller: 'DirectivesController',
            controllerAs: 'vm'
          })
          .state('userCard', {
            url: '/user-card',
            templateUrl: ' /templates/userInfoCardPlainButton.html',
            controller: 'DirectivesController',
            controllerAs: 'vm'
          })
          // .state(' ', {})
          // .state('', {});
    }//configureRouter

})();

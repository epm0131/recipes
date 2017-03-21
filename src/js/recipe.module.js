(function() {
  'use strict';

  angular.module('recipe', ['ui.router'])
    .config(routerConfig);

  routerConfig.$inject = [ '$stateProvider', '$urlRouterProvider']  ;

  function routerConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/');

    $stateProvider
      .state({
        name: 'home',
        url: '/',
        templateUrl: 'views/home.template.html',
        controller: 'RecipeController',
        controllerAs: 'recipes'
      });

    $stateProvider
      .state({
        name: 'list',
        url: '/list',
        templateUrl: 'views/list.template.html',
        controller: 'RecipeListController',
        controllerAs: 'list'
      });
  }

}());

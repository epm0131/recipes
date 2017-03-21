(function() {
  'use strict';

  angular.module('recipe')
   .controller('RecipeListController', RecipeListController);

  function RecipeListController() {
    console.log('Creating the List Controller');
  }
}());

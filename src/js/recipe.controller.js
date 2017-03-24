(function() {
  'use strict';

  angular.module('recipe')
   .controller('RecipeController', RecipeController);

  RecipeController.$inject = [ '$q', 'RecipeService'];

  console.log('does the service get created');

  function RecipeController($q, RecipeService) {
    var vm = this;
    this.recipe = {};

    this.findRecipe = function findRecipe(ingredient) {
      RecipeService.getNutritionalData(ingredient)
      .then(function successHandler(data) {
        vm.recipe = data;
        return data;
      })
      .catch(function failHandler(xhr) {
        console.log(xhr);
      });
    };

  }
}());

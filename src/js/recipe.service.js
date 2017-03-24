(function() {
  'use strict';

  angular.module('recipe')
    .factory('RecipeService', RecipeService);

    RecipeService.$inject = [ '$http' ];

    var myID = 'a04bc433';
    var myKey = '3f6edfb39a9e0abe8f3c196d9320748b';

    function RecipeService($http) {

      return {

        getNutritionalData: getNutritionalData

      };

      function getNutritionalData(ingredient) {

        return $http({
          url: 'https://api.edamam.com/api/nutrition-data?app_id=' + myID + '&app_key=' + myKey + '&ingr=' + ingredient,
          method: 'GET'
        })
        .then(function transformgetNutritionalData(response) {
          console.log(response.data);
          return response;
        });
      }
    }
}());

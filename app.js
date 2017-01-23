/**
 * Created by mac on 1/18/17.
 */
(function () {
    'use  strict';
    angular.module('DIApp', [])
        .controller('DIController', DIController);

    DIController.$inject = ['$scope', '$filter'];
    function DIController($scope, $filter){
           $scope.name = "Dipesh";
           $scope.nameOfPet = "Pug";

           $scope.upper = function () {
               var upCase = $filter('uppercase');
               $scope.name = upCase($scope.name);
           };

           $scope.showMessage = function () {
               return "Dipesh has two dogs."
           };

           $scope.changePet = function() {
               if($scope.nameOfPet == "Browny"){
                   $scope.nameOfPet = "Pug";
               }else {
                   $scope.nameOfPet = "Browny";
               }
           };
       };

})();
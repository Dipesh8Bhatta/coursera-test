/**
 * Created by mac on 1/23/17.
 */

(function () {
    'use strict';
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.content = '';
        $scope.showMessage = '';

        $scope.checkIfTooMuch = function () {
            if($scope.content == ''){
                $scope.showMessage = 'Please Enter the data first'
            }else{
                var launchItem = $scope.content;
                var listOfLaunchItem = launchItem.split(',');
                var length = listOfLaunchItem.length;
                if (length <= 3){
                    $scope.showMessage = 'Enjoy!';
                }else {
                    $scope.showMessage = 'Too much';
                }
            }
        };
    };
})();
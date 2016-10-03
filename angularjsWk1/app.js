(function(){
'use strict'

angular.module('lunchCheckApp', [])// name of the ng-app
.controller('lunchCheckController', lunchCheckController); //name of the ng-controller

lunchCheckController.$inject=  ['$scope', '$filter']; // use inject to protect against minify errors
function lunchCheckController($scope, $filter){
    $scope.foodList= "";  //food list from user input ng-model
    $scope.message=""; // message to be displayed to the user {{message}}
    $scope.calculateAmount = function(){ //onclick function to calculate how many items user entered separated by a comma
        var userInput = $scope.foodList; // store the foodlist into a variable
        var items = userInput.split(','); //split it by commas
        var numberOfItems = items.length; // check how many items in the array returned by split
        if(numberOfItems == 1 && items[0]==""){ // if it empty
            $scope.message = "Please enter data first"; // say this
        }
        else if(numberOfItems <=3){// else if it is less than 3,
            $scope.message = "Enjoy!";// say this
        }
        else if(numberOfItems > 3){// if more than 3 
            $scope.message = "Too much";// say this
        }
        
        
    }
}

})();
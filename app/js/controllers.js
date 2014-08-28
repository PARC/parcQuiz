'use strict';

angular.module('parcQuiz.controllers').controller('Quiz', ['$scope', 'localStorageService', 'questionService', 'headingService', '$location', function($scope, localStorageService, questionService, headingService, $location) {
 
  // Results from Questions 1 (strategy)
    
  var strategyLevel1 = _.where($scope.questions1, {result: "agree"})
      strategyLevel1 = _.pluck(strategyLevel1, "weight")
      strategyLevel1 = _.reduce(strategyLevel1, function(memo, num){ return memo + num; }, 0);
    
  $scope.strategyLevel1 = strategyLevel1
        
  // Results from Questions 2 (culture)
    
  var cultureLevel1 = _.where($scope.questions2, {result: "agree"})
      cultureLevel1 = _.pluck(cultureLevel1, "weight")
      cultureLevel1 = _.reduce(cultureLevel1, function(memo, num){ return memo + num; }, 0);
        
  if (cultureLevel1 <= 2)                       { cultureLevel1 = 2 }
  if (cultureLevel1 >= 3 && cultureLevel1 <= 4) { cultureLevel1 = 3 }
  if (cultureLevel1 >= 5 && cultureLevel1 <= 6) { cultureLevel1 = 4 }
  if (cultureLevel1 >= 7)                       { cultureLevel1 = 5 }
        
  $scope.cultureLevel1 = cultureLevel1

  // Expose the headings service to the scope
  $scope.headings = headingService
     
  //Local Storage Retrieval // localStorageService.clearAll();    
  for (var x = 1; x<3; x++) {
    if (localStorageService.get("questions" + x) !=  undefined ) {
      $scope["questions" + x] = localStorageService.get("questions" + x)
    }
  }
    
  // Save and redirect when clicking back for forward buttons
  $scope.redirect = function(url, saveObject) {
    if (saveObject !=  undefined) {
      localStorageService.set(saveObject,$scope[saveObject]);
    }
    $location.path(url);
  }

}]);
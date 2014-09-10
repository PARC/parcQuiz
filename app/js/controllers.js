'use strict';

angular.module('parcQuiz.controllers').controller('Quiz', ['$scope', 'localStorageService', 'questionService', 'headingService', '$location', function($scope, localStorageService, questionService, headingService, $location) {
   
  //Local Storage Retrieval   
  for (var x = 1; x<=6; x++) {
    $scope["questions" + x] = questionService["questions" + x]
    if (localStorageService.get("questions" + x) !=  undefined ) {
      $scope["questions" + x] = localStorageService.get("questions" + x)
    }
  }
  
  $scope.resetQuiz = function() {
    localStorageService.clearAll()
    alert("Please click your browser's refresh button after the page loads.")
    $location.path("/splash")
  }
  
  // Expose the headings service to the scope
  $scope.headings = headingService
  
  // Set the recommendations to false by default
  $scope.recommendation = false
      
  // Save and redirect when clicking back for forward buttons
  $scope.redirect = function(url, saveObject) {
    if (saveObject != undefined) {
      localStorageService.set(saveObject,$scope[saveObject]);
    }
    $location.path(url);
  }
  
  // Custom radio boxes
  $scope.selected = undefined;
  $scope.toggleVisibility = function(answer) {
    $scope.selected = answer;
  };
  $scope.isVisible = function(answer) {
    return $scope.selected === answer;
  };
  
  // LEVEL 1 STRATEGY
  var strategyL1 = _.where($scope.questions1, {result: "agree"})
      strategyL1 = _.pluck(strategyL1, "weight")
      strategyL1 = _.reduce(strategyL1, function(memo, num){ return memo + num; }, 0)
  $scope.strategyL1 = strategyL1
   
  // LEVEL 1 CULTURE
  var cultureL1 = _.where($scope.questions2, {result: "agree"})
      cultureL1 = _.pluck(cultureL1, "weight")
      cultureL1 = _.reduce(cultureL1, function(memo, num){ return memo + num; }, 0)
            
  if (cultureL1 <= 2)                   { cultureL1 = 2 }
  if (cultureL1 >= 3 && cultureL1 <= 4) { cultureL1 = 3 }
  if (cultureL1 >= 5 && cultureL1 <= 6) { cultureL1 = 4 }
  if (cultureL1 >= 7)                   { cultureL1 = 5 }
  $scope.cultureL1 = cultureL1

  // LEVEL 2 STRATEGY
  var strategyL2 = strategyL1 + $scope.questions3.result
  $scope.strategyL2 = strategyL2

  // LEVEL 2 CULTURE
  var cultureL2 = cultureL1 + $scope.questions4.result
  $scope.cultureL2 = cultureL2
  
  // LEVEL 3 STRATEGY
  var strategyL3 = 0,
      q5answers = $scope.questions5.answers
  
  if      (q5answers[0].checked && q5answers[2].checked)  { strategyL3 = 5 }
  else if (q5answers[1].checked && q5answers[2].checked)  { strategyL3 = 3 }
  else if (q5answers[2].checked)                          { strategyL3 = 4 }
  else if (q5answers[1].checked)                          { strategyL3 = 1 }
  else if (q5answers[0].checked)                          { strategyL3 = 2 }

  var q6answers = $scope.questions6.answers
  if (q6answers[0].checked) { strategyL3 += 1 }
  if (q6answers[1].checked) { strategyL3 += 3 }
  if (q6answers[2].checked) { strategyL3 += 2 }
  if (q6answers[3].checked) { strategyL3 += 2 }
  if (q6answers[4].checked) { strategyL3 += 1 }
  if (q6answers[5].checked) { strategyL3 += 1 }
  if (q6answers[6].checked) { strategyL3 += 1 }
  if (q6answers[7].checked) { strategyL3 += -5 }

  $scope.strategyL3 = strategyL2 + strategyL3

  // LEVEL 3 CULTURE
  var cultureL3 = 0,
      q6count = _.where(q6answers, {checked: true}).length
  
  if      (q5answers[0].checked)  { cultureL3 = 5 }
  else if (q5answers[2].checked)  { cultureL3 = 1 }
  
  if (q6count >= 2 && q6count <= 3)  { cultureL3 += 2 }
  if (q6count >= 4 && q6count <= 5)  { cultureL3 += 4 }
  if (q6count >= 6)                  { cultureL3 += 5 }
  if (q6answers[7].checked == true)  { cultureL3 += -5 }
     
  $scope.cultureL3 = cultureL2 + cultureL3 
    
}]);
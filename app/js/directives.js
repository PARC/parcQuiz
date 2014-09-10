'use strict';

angular.module('parcQuiz.directives', []).directive('agreeDisagree', [function(version) {
  return {
    scope: {
      "result": "=",
      "questionNumber": "=",
      "previousResult": "=",
    },
    link: function(scope, element, attrs) {
      
      // Add the agree / disagree buttons
      var agree = angular.element("<div class='quiz-button button-green'>AGREE</div></div>")
      element.append(agree)

      var disagree = angular.element("<div class='quiz-button button-red'>DISAGREE</div></div>")
      element.append(disagree)
      
      // Agree click listener
      agree.bind('click', function () {
        if (disagree.hasClass("hidden")) {            
          disagree.removeClass("hidden");   
          agree.addClass("hidden");   
          scope.$apply(function(){
            scope.result="disagree"
          });
        }
        else {
          disagree.addClass("hidden");
          scope.$apply(function(){
            scope.result="agree"
          });
        }
      });
             
      // Disagree click listener
      disagree.bind('click', function () {
        if (agree.hasClass("hidden")) {            
          agree.removeClass("hidden");
          disagree.addClass("hidden");
          scope.$apply(function(){
            scope.result="agree"
          });
        }
        else {
          agree.addClass("hidden");
          scope.$apply(function(){
            scope.result="disagree"
          });
        }
      });
      
      // Hide stuff if this is the first time loading the page
      if (scope.questionNumber > 0 && scope.previousResult==undefined) {
        disagree.addClass("hidden");
        agree.addClass("hidden");
      }
      
      // Show stuff if it's a return visit
      if (scope.result == "agree") {
        disagree.addClass("hidden");
        agree.removeClass("hidden");
      }
      if (scope.result == "disagree") {
        agree.addClass("hidden");
        disagree.removeClass("hidden");
      }
            
      // Listen for changes in scope (2-way data binding)      
      scope.$watch('previousResult', function() {
          if (scope.questionNumber > 0 && scope.previousResult!=undefined) {
            if (agree.hasClass("hidden") && disagree.hasClass("hidden")) {
              agree.removeClass("hidden");
              disagree.removeClass("hidden");
            }
          }
      }, true);

    }
  }
}])

.directive('penguin', [function(version) {
  return {
    scope: {
      "recommendation": "=",
    },
    templateUrl: "templates/penguin.html"
  }
}])

.directive('devil', [function(version) {
  return {
    scope: {
      "recommendation": "=",
    },
    templateUrl: "templates/devil.html"
  }
}])

.directive('tiger', [function(version) {
  return {
    scope: {
      "recommendation": "=",
    },
    templateUrl: "templates/tiger.html"
  }
}])

.directive('dolphin', [function(version) {
  return {
    scope: {
      "recommendation": "=",
    },
    templateUrl: "templates/dolphin.html"
  }
}])

.directive('faqModal', [function(version) {
  return {
    templateUrl: "templates/faq.html"
  }
}])

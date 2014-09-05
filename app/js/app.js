'use strict';

angular.module('parcQuiz.controllers', [])
angular.module('parcQuiz.filters', [])
angular.module('parcQuiz.services', [])
angular.module('parcQuiz.directives', [])

// Declare app level module which depends on filters, and services
var parcQuiz = angular.module('parcQuiz', [
'ngRoute',
'parcQuiz.filters',
'parcQuiz.services',
'parcQuiz.directives',
'parcQuiz.controllers',
'LocalStorageModule',
])

.config(['$routeProvider', 'localStorageServiceProvider', function($routeProvider, localStorageServiceProvider) {
  localStorageServiceProvider.setPrefix('PARC');
  $routeProvider.when('/splash', {templateUrl: 'partials/splash.html', controller: 'Quiz'});
  $routeProvider.when('/faq', {templateUrl: 'partials/faq.html', controller: 'Quiz'});
  $routeProvider.when('/questions1', {templateUrl: 'partials/questions1.html', controller: 'Quiz'});
  $routeProvider.when('/questions2', {templateUrl: 'partials/questions2.html', controller: 'Quiz'});
  $routeProvider.when('/questions3', {templateUrl: 'partials/questions3.html', controller: 'Quiz'});
  $routeProvider.when('/questions4', {templateUrl: 'partials/questions4.html', controller: 'Quiz'});
  $routeProvider.when('/questions5', {templateUrl: 'partials/questions5.html', controller: 'Quiz'});
  $routeProvider.when('/questions6', {templateUrl: 'partials/questions6.html', controller: 'Quiz'});
  $routeProvider.when('/resultsLevel1', {templateUrl: 'partials/resultsLevel1.html', controller: 'Quiz'});
  $routeProvider.when('/resultsLevel2', {templateUrl: 'partials/resultsLevel2.html', controller: 'Quiz'});
  $routeProvider.when('/resultsLevel3', {templateUrl: 'partials/resultsLevel3.html', controller: 'Quiz'});
  $routeProvider.otherwise({redirectTo: '/splash'});
}]);

window.parcQuiz = parcQuiz


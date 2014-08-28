'use strict';

angular.module('parcQuiz.services').service('headingService', [function() {
  
  var headingData={};
  
  headingData.heading1 = "Actions & Attitudes"
  headingData.subheading1 = "Innovation Goals and Plans"
  headingData.subheading2 = "Innovation Attitudes and Behaviors"
  
  headingData.heading2 = "Innovation Effectiveness"
  headingData.subheading3 = "subheading1"
  headingData.subheading4 = "subheading2"
  
  headingData.heading3 = "Participation & Support"
  headingData.subheading5 = "subheading1"
  headingData.subheading6 = "subheading2"  
  
  return headingData;
  
}]);
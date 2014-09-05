'use strict';

angular.module('parcQuiz.services').service('headingService', [function() {
  
  var headingData={};
  
  headingData.heading1 = "Actions & Attitudes"
  headingData.subheading1 = "Innovation Goals and Plans"
  headingData.subheading2 = "Innovation Attitudes and Behaviors"
  
  headingData.heading2 = "Innovation Effectiveness"
  headingData.subheading3 = "Readiness for Disruption"
  headingData.subheading4 = "ROI on Innovation"
  
  headingData.heading3 = "Participation & Support"
  headingData.subheading5 = "Participation in Innovation"
  headingData.subheading6 = "Supporting Mechanisms"  
  
  return headingData;
  
}]);
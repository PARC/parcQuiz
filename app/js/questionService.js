'use strict';
angular.module('parcQuiz.services').service('questionService', [function() {
  
  var questionData={};
  
  // Questions 1
  questionData.questions1 = [
  {
    "question": "We have high ambition for innovation, but we don't always take prompt or consistent action.",
    "result" : undefined,
    "weight" : 0
  },
  {
    "question": "We initiate innovation projects, but don't always sustain efforts.",
    "result" : undefined,
    "weight" : 1
  },
  {
    "question": "We have no clear innovation strategy.",
    "result" : undefined,
    "weight" : -5
  },
  {
    "question": "Our innovation strategy changes frequently.",
    "result" : undefined,
    "weight" : 2
  },
  {
    "question": "Innovation is important but our priorities are efficiency and driving existing business.",
    "result" : undefined,
    "weight" : -3
  },
  {
    "question": "Our innovation strategy is tied to compensation and rewards.",
    "result" : undefined,
    "weight" : 4
  },
  {
    "question": "There are mechanisms to support our company's innovation strategy.",
    "result" : undefined,
    "weight" : 3
  },
  {
    "question": "We have a track record of innovation success.",
    "result" : undefined,
    "weight" : 5
  },
  ]

  // Questions 2
  questionData.questions2 = [
  {
    "question": "We embrace risk.",
    "result" : undefined,
    "weight" : 1
  },
  {
    "question": "We encourage new ideas.",
    "result" : undefined,
    "weight" : 1
  },
  {
    "question": "We accept a degree of chaos/waste.",
    "result" : undefined,
    "weight" : 1
  },
  {
    "question": "We learn fast by not being afraid to fail.",
    "result" : undefined,
    "weight" : 1
  },
  {
    "question": "We hire for innovation capability.",
    "result" : undefined,
    "weight" : 1
  },
  {
    "question": "We establish clear ownership for innovation.",
    "result" : undefined,
    "weight" : 1
  },
  {
    "question": "We actively seek new insights about the world.",
    "result" : undefined,
    "weight" : 1
  },
  {
    "question": "We champion user needs.",
    "result" : undefined,
    "weight" : 1
  },
  {
    "question": "We take pride in our innovation legacy.",
    "result" : undefined,
    "weight" : 1
  },
  ]
  
  return questionData;
  
}]);
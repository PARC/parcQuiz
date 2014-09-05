'use strict';

angular.module('parcQuiz.services').service('questionService', [function() {
  
  var questionData={};
  
  // Question Block 1
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

  // Question Block 2
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
  
  // Question Block 3
  questionData.questions3 = {
    "question": "My company's attitude to the threat of disruption is...",
    "result" : undefined,
    "answers" :
    [{  
      "answer" : "We act as if our industry will stay as it is forever.",
      "weight" : -5
    },
    {  
      "answer" : "We will survive in some form.",
      "weight" : -3
    },
    {  
      "answer" : "We are prepared for disruption.",
      "weight" : 2
    },
    {  
      "answer" : "We will get stronger as a result of disruption.",
      "weight" : 3
    },
    {  
      "answer" : "We will disrupt the market ourselves.",
      "weight" : 5
    }]
  }
  
  // Question Block 4
  questionData.questions4 = {
    "question": "My company's ROI on innovation has been...",
    "result" : undefined,
    "answers" :
    [{  
      "answer" : "Very weak.",
      "weight" : -5
    },
    {  
      "answer" : "Weak.",
      "weight" : -4
    },
    {  
      "answer" : "Competitive with peers.",
      "weight" : 0
    },
    {  
      "answer" : "Strong.",
      "weight" : 4
    },
    {  
      "answer" : "Very strong.",
      "weight" : 5
    }]
  }
  
  // Question Block 5
  questionData.questions5 = {
    "question": "Who participates in innovation in your company? (check all that apply)",
    "answers" :
    [{  
      "answer" : "All employees.",
      "weight" : 5,
      "checked": false
    },
    {  
      "answer" : "Only top-level management.",
      "weight" : 0,
      "checked": false
    },
    {  
      "answer" : "Specialized innovation functions/leaders/champions.",
      "weight" : 1,
      "checked": false
    }]
  }

  // Question Block 6
  questionData.questions6 = {
    "question": "Who participates in innovation in your company? (check all that apply)",
    "answers" :
    [{  
      "answer" : "Innovation processes and tools.",
      "weight" : 5,
      "checked": false
    },
    {  
      "answer" : "Innovation fund or allocated budget.",
      "weight" : 0,
      "checked": false
    },
    {  
      "answer" : "Incubator for new ventures.",
      "weight" : 0,
      "checked": false
    },
    {  
      "answer" : "Innovation coaches.",
      "weight" : 0,
      "checked": false
    },
    {  
      "answer" : "Innovation Management System.",
      "weight" : 0,
      "checked": false
    },
    {  
      "answer" : "Cross-business innovation metrics.",
      "weight" : 0,
      "checked": false
    },
    {  
      "answer" : "IP licensing support team.",
      "weight" : 0,
      "checked": false
    },
    {  
      "answer" : "None.",
      "weight" : 1,
      "checked": false
    }]
  }

  return questionData;
  
}]);
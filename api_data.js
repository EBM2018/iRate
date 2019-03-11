define({ "api": [
  {
    "type": "post",
    "url": "/copy/:copyId/answer",
    "title": "Create a new answer associated with a copy",
    "name": "CreateAnswer",
    "group": "Answers",
    "description": "<p>This URL creates a new copy</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "answer",
            "description": "<p>An object containing all the data necessary for its creation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"content\": \"Voici une réponse à une question\",\n \"_id\": \"5a9e7d55717a690c53650ab1\",\n \"grade\": 18,\n \"questionId\": \"5slh7d55717a690c53650ab1\",\n \"copyId\": \"5a9e7d55717a690c53650ajy\",\n \"feedbackId\": \"5a9pou8717a690c53650ab1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "json",
            "optional": false,
            "field": "Copy",
            "description": "<p>a JSON object containing the created answer</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/ressources/copies/index.js",
    "groupTitle": "Answers",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/copy/:copyId/answer"
      }
    ]
  },
  {
    "type": "get",
    "url": "/copy/answer/:answerId",
    "title": "Get a specific answer",
    "name": "GetAnswerById",
    "group": "Answers",
    "description": "<p>Returns a JSON containing a given answer ID</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5a9e7dc7717a690c53650ab1\",\n  \"copyId\": \"5pod76h7a690c53650ab1\",\n  \"type\": \"Answers\",\n  \"creationTime\": \"2018-03-06T11:38:47.160Z\",\n  \"content\": \"Voici une réponse à une question\",\n  \"grade\": 18,\n  \"question\": {\n     \"_id\": \"5a9e7dlqskfa690c53650ab1\",\n     \"title\": \"Quelle est la somme de 2*8 ?\",\n     \"scale\": 2,\n     \"creationTime\": \"01/01/2019T07:15:31\"\n   },\n   \"feedback\": [\n      {\n        \"_id\": \"5a9e7dlqskfa690c53650ab1\",\n        \"content\": \"Votre réponse est bonne mais aurait pu être davantage élaborée\",\n        \"creationTime\": \"01/01/2019T07:15:31\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/ressources/copies/index.js",
    "groupTitle": "Answers",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/copy/answer/:answerId"
      }
    ]
  },
  {
    "type": "post",
    "url": "/copy",
    "title": "Create a new copy",
    "name": "CreateCopy",
    "group": "Copies",
    "description": "<p>This URL creates a new copy</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "copy",
            "description": "<p>An object containing all the data necessary for its creation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"title\": \"Copies 1\",\n \"authorId\": \"abcdefghjkqspdsqpjpijp86972\",\n \"examId\": \"sqojfdoisqjdoiqj679089076\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "json",
            "optional": false,
            "field": "Copy",
            "description": "<p>a JSON object containing the created copy</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/ressources/copies/index.js",
    "groupTitle": "Copies",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/copy"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/copy/:copyId",
    "title": "Delete a copy",
    "name": "DeleteCopyById",
    "group": "Copies",
    "description": "<p>This deletes a copy</p>",
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "null",
            "optional": false,
            "field": "null",
            "description": "<p>Empty data</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/ressources/copies/index.js",
    "groupTitle": "Copies",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/copy/:copyId"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/copy/:copyId",
    "title": "Edit a copy",
    "name": "EditCopies",
    "group": "Copies",
    "description": "<p>This URL edit a copy from its id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "copy",
            "description": "<p>An object with the information you want to edit.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"title\": \"Exercice 6\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "json",
            "optional": false,
            "field": "Copy",
            "description": "<p>a JSON object containing the edited copy</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/ressources/copies/index.js",
    "groupTitle": "Copies",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/copy/:copyId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/copy/:examId",
    "title": "Get all copies related to an exam",
    "name": "GetAllCopies",
    "group": "Copies",
    "description": "<p>Returns a JSON containing all the copies for a given exam</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n {\n   \"_id\": \"5a9e7dc7717a690c53650ab1\",\n   \"type\": \"Copies\"\n   \"examId\": \"5pod76h7a690c53650ab1\",\n   \"title\": \"Copies 1\",\n   \"author\" : {\n     \"name\": \"Yolo\",\n     \"surname\": \"Swag\"\n   }\n   \"answers\": [\n     {\n         \"creationTime\": \"2018-03-06T11:38:47.160Z\",\n         \"content\": \"Voici une réponse à une question\",\n         \"_id\": \"5a9e7d55717a690c53650ab1\",\n         \"grade\": 18,\n         \"question\": {\n           \"_id\": \"5a9e7dlqskfa690c53650ab1\",\n           \"title\": \"Quelle est la somme de 2*8 ?\",\n           \"scale\": 2,\n           \"creationTime\": \"01/01/2019T07:15:31\"\n         },\n         \"feedback\": [\n             {\n                 \"_id\": \"5a9e7dlqskfa690c53650ab1\",\n                 \"content\": \"Votre réponse est bonne mais aurait pu être davantage élaborée\",\n                 \"creationTime\": \"01/01/2019T07:15:31\"\n             }\n         ]\n\n     }\n   ]\n   \"submissionTime\": \"2018-03-06T11:38:47.160Z\",\n   \"creationTime\": \"2018-03-06T11:38:47.160Z\",\n   \"__v\": 0\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/ressources/copies/index.js",
    "groupTitle": "Copies",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/copy/:examId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/copy/:copyId",
    "title": "Get a specific copy",
    "name": "GetCopyById",
    "group": "Copies",
    "description": "<p>Returns a JSON containing a given copy ID</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5a9e7dc7717a690c53650ab1\",\n  \"type\": \"Copies\"\n  \"examId\": \"5pod76h7a690c53650ab1\",\n  \"title\": \"Copies 1\",\n  \"author\" : {\n    \"name\": \"Yolo\",\n    \"surname\": \"Swag\"\n  }\n  \"answers\": [\n    {\n        \"creationTime\": \"2018-03-06T11:38:47.160Z\",\n        \"content\": \"Voici une réponse à une question\",\n        \"_id\": \"5a9e7d55717a690c53650ab1\",\n        \"grade\": 18,\n        \"question\": {\n          \"_id\": \"5a9e7dlqskfa690c53650ab1\",\n          \"title\": \"Quelle est la somme de 2*8 ?\",\n          \"scale\": 2,\n          \"creationTime\": \"01/01/2019T07:15:31\"\n        },\n        \"feedback\": [\n            {\n                \"_id\": \"5a9e7dlqskfa690c53650ab1\",\n                \"content\": \"Votre réponse est bonne mais aurait pu être davantage élaborée\",\n                \"creationTime\": \"01/01/2019T07:15:31\"\n            }\n        ]\n\n    }\n  ]\n  \"submissionTime\": \"2018-03-06T11:38:47.160Z\",\n  \"creationTime\": \"2018-03-06T11:38:47.160Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/ressources/copies/index.js",
    "groupTitle": "Copies",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/copy/:copyId"
      }
    ]
  },
  {
    "type": "post",
    "url": "/exam",
    "title": "Create a new exam",
    "name": "CreateExam",
    "group": "Exams",
    "description": "<p>This URL creates a new exam based on the body request</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "exam",
            "description": "<p>An object containing all the data necessary for its creation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"title\": \"Examen 3\",\n \"instruction\": \"Je n'ai pas d'instructions spéciales, à vous de jouer !\",\n \"reminders\": \"Tous documents interdit\",\n \"authorId\": \"abcdefghjkqspdsqpjpijp86972\",\n \"sessionId\": \"sqojfdoisqjdoiqj679089076\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "json",
            "optional": false,
            "field": "Exam",
            "description": "<p>a JSON object containing the created document</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/ressources/exams/index.js",
    "groupTitle": "Exams",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/exam"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/exams/:examId",
    "title": "Delete an exam",
    "name": "DeleteExam",
    "group": "Exams",
    "description": "<p>This URL deletes an exam from its id.</p>",
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "null",
            "optional": false,
            "field": "null",
            "description": "<p>Empty date to return</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/ressources/exams/index.js",
    "groupTitle": "Exams",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/exams/:examId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/exams",
    "title": "Get all exams",
    "name": "GetAllExams",
    "group": "Exams",
    "description": "<p>This URL displays a JSON containing all exams from the database</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "module",
            "description": "<p>Optional Module parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "session",
            "description": "<p>Optional session name parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "userId",
            "description": "<p>Optional userId parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n {\n   \"_id\": \"5a9e7dc7717a690c53650ab1\",\n   \"title\": \"Examen 1\",\n   \"instruction\": \"A propos de cet examen, voici une formule qui peut vous intéresser: E=1/2mc²\",\n   \"reminder\": \"- Les calculatrices sont interdites \\n - Tout objet connecté est interdit\"\n   \"author\" : {\n     \"name\": \"Yolo\",\n     \"surname\": \"Swag\"\n   }\n   \"session\": {\n     \"startDate\": \"01/01/2019Z8:00:00\"\n     \"endDate\": \"01/01/2019Z12:00:00\"\n   }\n   \"creationTime\": \"2018-03-06T11:38:47.160Z\",\n   \"__v\": 0\n },\n {\n   \"_id\": \"5a9e7dc7717a690c57989ab1\",\n   \"title\": \"Examen 2\",\n   \"instruction\": \"Bon courage pour votre epreuve !\",\n   \"reminder\": \"- Tout document autorisés\"\n   \"author\" : {\n     \"name\": \"Justin\",\n     \"surname\": \"Bieber\"\n   }\n   \"session\": {\n     \"startDate\": \"02/01/2019Z8:00:00\"\n     \"endDate\": \"02/01/2019Z10:00:00\"\n   }\n   \"creationTime\": \"2018-04-06T11:38:47.160Z\",\n   \"__v\": 0\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/ressources/exams/index.js",
    "groupTitle": "Exams",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/exams"
      }
    ]
  },
  {
    "type": "get",
    "url": "/exams/correction/:examId",
    "title": "Get a correction",
    "name": "GetCorrectionById",
    "group": "Exams",
    "description": "<p>This URL displays a JSON containing a correction for an exam</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "*  {\n  \"_id\": \"5a9e7dc7717a690c53650ab1\",\n  \"title\": \"Examen 1\",\n  \"instruction\": \"A propos de cet examen, voici une formule qui peut vous intéresser: E=1/2mc²\",\n  \"reminder\": \"- Les calculatrices sont interdites \\n - Tout objet connecté est interdit\",\n  \"author\" : {\n    \"name\": \"Yolo\",\n    \"surname\": \"Swag\"\n  },\n  \"session\": {\n    \"startDate\": \"01/01/2019T8:00:00\"\n    \"endDate\": \"01/01/2019T12:00:00\"\n  },\n  \"exercices\" : [\n    {\n      \"_id\": \"5a9e7dc7832a690c53650ab1\"\n      \"title\": \"Exercice 1\",\n      \"estimatedTime\": \"01:00:00\",\n      \"creationTime\": \"01/01/2019T07:00:00\",\n      \"questions\": [\n        {\n          \"_id\": \"5a9e7dcjdkfa690c53650ab1\",\n          \"title\": \"Quelle est la somme de 1+1 ?\",\n          \"scale\": 0.5,\n          \"correction\": \"2\"\n          \"creationTime\": \"01/01/2019T07:00:00\"\n        },\n        {\n          \"_id\": \"5a9e7jekkfa690c53650ab1\",\n          \"title\": \"Quelle est la somme de 2+2 ?\",\n          \"scale\": 0.75,\n          \"correction\": \"4\"\n          \"creationTime\": \"01/01/2019T07:00:00\"\n        }\n      ],\n    },\n    {\n      \"_id\": \"5a9e7dc7832jfhdc53650ab1\"\n      \"title\": \"Exercice 2\",\n      \"estimatedTime\": \"00:30:00\",\n      \"creationTime\": \"01/01/2019T07:15:00\",\n      \"questions\": [\n        {\n          \"_id\": \"5a9e7dlqskfa690c53650ab1\",\n          \"title\": \"Quelle est la somme de 2*8 ?\",\n          \"scale\": 2,\n          \"correction\": \"16\"\n          \"creationTime\": \"01/01/2019T07:15:31\"\n        },\n        {\n          \"_id\": \"5a9e7jsqifa690c53650ab1\",\n          \"title\": \"Quelle est la somme de 4+8 ?\",\n          \"scale\": 2.25,\n          \"correction\": \"12\"\n          \"creationTime\": \"01/01/2019T07:16:05\"\n        }\n      ],\n    }\n  ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/ressources/exams/index.js",
    "groupTitle": "Exams",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/exams/correction/:examId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/exams/:examId",
    "title": "Get an exam",
    "name": "GetExamById",
    "group": "Exams",
    "description": "<p>This URL displays a JSON containing an exam from its id</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "*  {\n  \"_id\": \"5a9e7dc7717a690c53650ab1\",\n  \"title\": \"Examen 1\",\n  \"instruction\": \"A propos de cet examen, voici une formule qui peut vous intéresser: E=1/2mc²\",\n  \"reminder\": \"- Les calculatrices sont interdites \\n - Tout objet connecté est interdit\",\n  \"author\" : {\n    \"name\": \"Yolo\",\n    \"surname\": \"Swag\"\n  },\n  \"session\": {\n    \"startDate\": \"01/01/2019T8:00:00\"\n    \"endDate\": \"01/01/2019T12:00:00\"\n  },\n  \"exercices\" : [\n    {\n      \"_id\": \"5a9e7dc7832a690c53650ab1\"\n      \"title\": \"Exercice 1\",\n      \"estimatedTime\": \"01:00:00\",\n      \"creationTime\": \"01/01/2019T07:00:00\",\n      \"questions\": [\n        {\n          \"_id\": \"5a9e7dcjdkfa690c53650ab1\",\n          \"title\": \"Quelle est la somme de 1+1 ?\",\n          \"scale\": 0.5,\n          \"creationTime\": \"01/01/2019T07:00:00\"\n        },\n        {\n          \"_id\": \"5a9e7jekkfa690c53650ab1\",\n          \"title\": \"Quelle est la somme de 2+2 ?\",\n          \"scale\": 0.75,\n          \"creationTime\": \"01/01/2019T07:00:00\"\n        }\n      ],\n    },\n    {\n      \"_id\": \"5a9e7dc7832jfhdc53650ab1\"\n      \"title\": \"Exercice 2\",\n      \"estimatedTime\": \"00:30:00\",\n      \"creationTime\": \"01/01/2019T07:15:00\",\n      \"questions\": [\n        {\n          \"_id\": \"5a9e7dlqskfa690c53650ab1\",\n          \"title\": \"Quelle est la somme de 2*8 ?\",\n          \"scale\": 2,\n          \"creationTime\": \"01/01/2019T07:15:31\"\n        },\n        {\n          \"_id\": \"5a9e7jsqifa690c53650ab1\",\n          \"title\": \"Quelle est la somme de 4+8 ?\",\n          \"scale\": 2.25,\n          \"creationTime\": \"01/01/2019T07:16:05\"\n        }\n      ],\n    }\n  ]\n  \"creationTime\": \"2018-03-06T11:38:47.160Z\",\n  \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/ressources/exams/index.js",
    "groupTitle": "Exams",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/exams/:examId"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/exams/:examId",
    "title": "Edit an exam",
    "name": "PatchExam",
    "group": "Exams",
    "description": "<p>This URL edit an exam from its id.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "exam",
            "description": "<p>an object with the information you want to edit.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"title\": \"Examen 3\",\n \"instruction\": \"Je n'ai pas d'instructions spéciales, à vous de jouer !\",\n \"reminders\": \"Tous documents interdit\",\n \"authorId\": \"abcdefghjkqspdsqpjpijp86972\",\n \"sessionId\": \"sqojfdoisqjdoiqj679089076\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "json",
            "optional": false,
            "field": "Exam",
            "description": "<p>a JSON object containing the edited document</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/ressources/exams/index.js",
    "groupTitle": "Exams",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/exams/:examId"
      }
    ]
  },
  {
    "type": "post",
    "url": "/exams/:examId/exercices",
    "title": "Create a new exercice",
    "name": "CreateExercice",
    "group": "Exercices",
    "description": "<p>This URL creates a new exercice in the exam requested in the url</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "exercice",
            "description": "<p>An object containing all the data necessary for its creation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"title\": \"Exercice 1\",\n \"estimatedTime\" : \"00:45:00\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "json",
            "optional": false,
            "field": "Exercice",
            "description": "<p>a JSON object containing the created document</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/ressources/exams/index.js",
    "groupTitle": "Exercices",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/exams/:examId/exercices"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/exams/:examId/exercices/:exerciceId",
    "title": "Delete an exercice",
    "name": "DeleteExercice",
    "group": "Exercices",
    "description": "<p>This URL deletes an exercice of an exam based on both ids.</p>",
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "null",
            "optional": false,
            "field": "null",
            "description": "<p>Empty date to return</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/ressources/exams/index.js",
    "groupTitle": "Exercices",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/exams/:examId/exercices/:exerciceId"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/exams/:examId/exercices/:exerciceId",
    "title": "Edit an exercice",
    "name": "EditExercice",
    "group": "Exercices",
    "description": "<p>This URL edit an exercice from its id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "exercice",
            "description": "<p>An object with the information you want to edit.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"title\": \"Exercice 6\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "json",
            "optional": false,
            "field": "Exercice",
            "description": "<p>a JSON object containing the edited document</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/ressources/exams/index.js",
    "groupTitle": "Exercices",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/exams/:examId/exercices/:exerciceId"
      }
    ]
  },
  {
    "type": "post",
    "url": "/feedback/",
    "title": "Create a new feedback",
    "name": "CreateFeedback",
    "group": "Feedbacks",
    "description": "<p>This URL creates a new feedback in the question requested</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "feedback",
            "description": "<p>An object containing all the data necessary for its creation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"_id\": \"5a9e7dcgrfeie823650ab1\",\n \"title\": \"Feedback 4\",\n \"content\": \"A revoir...\",\n \"creationTime\": \"2019-01-02T11:38:47.160Z\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "json",
            "optional": false,
            "field": "Feedback",
            "description": "<p>a JSON object containing the created document</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/ressources/feedbacks/index.js",
    "groupTitle": "Feedbacks",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/feedback/"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/feedback/:feedbackId",
    "title": "Delete a feedback",
    "name": "DeleteFeedback",
    "group": "Feedbacks",
    "description": "<p>This URL deletes a question from its id</p>",
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "null",
            "optional": false,
            "field": "null",
            "description": "<p>Empty date to return</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/ressources/feedbacks/index.js",
    "groupTitle": "Feedbacks",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/feedback/:feedbackId"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/feedback/:feedbackId",
    "title": "Edit a feedback",
    "name": "EditFeedback",
    "group": "Feedbacks",
    "description": "<p>This URL edit a feedback from its id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "feedback",
            "description": "<p>An object containing all the data that you want to edit</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"content\": \"Le design pattern n'est pas assimilé\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "json",
            "optional": false,
            "field": "Feedback",
            "description": "<p>a JSON object containing the edited document</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/ressources/feedbacks/index.js",
    "groupTitle": "Feedbacks",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/feedback/:feedbackId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/feedback/:questionId",
    "title": "Get feedback from a question",
    "name": "GetFeedbackByQuestion",
    "group": "Feedbacks",
    "description": "<p>This URL display a JSON containing all the feedback of a question</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n {\n   \"_id\": \"5a9e7dc7717g453g323650ab1\",\n   \"title\": \"Feedback 1\",\n   \"content\": \"Faux, la notion de async est à revoir\",\n   \"creationTime\": \"2018-03-06T11:38:47.160Z\",\n   \"__v\": 0\n },\n {\n   \"_id\": \"5a9e7dc7Gefjie823650ab1\",\n   \"title\": \"Feedback 2\",\n   \"content\": \"Très bien, la notion est assimilée\",\n   \"creationTime\": \"2018-03-06T11:38:47.160Z\",\n   \"__v\": 0\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/ressources/feedbacks/index.js",
    "groupTitle": "Feedbacks",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/feedback/:questionId"
      }
    ]
  },
  {
    "type": "post",
    "url": "/exams/:examId/exercices/:exerciceId/questions",
    "title": "Create a new question",
    "name": "CreateQuestion",
    "group": "Questions",
    "description": "<p>This URL creates a new question in the exercice requested</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "question",
            "description": "<p>An object containing all the data necessary for its creation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"title\": \"Combien vaut 2+2 ?\",\n \"scale\": 2.5\n \"correction\": \"2+2 = 4\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "json",
            "optional": false,
            "field": "Question",
            "description": "<p>a JSON object containing the created document</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/ressources/exams/index.js",
    "groupTitle": "Questions",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/exams/:examId/exercices/:exerciceId/questions"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/exams/:examId/exercices/:exerciceId/questions/:questionId",
    "title": "Delete a question",
    "name": "DeleteQuestion",
    "group": "Questions",
    "description": "<p>This URL deletes a question from its id</p>",
    "success": {
      "fields": {
        "204": [
          {
            "group": "204",
            "type": "null",
            "optional": false,
            "field": "null",
            "description": "<p>Empty date to return</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/ressources/exams/index.js",
    "groupTitle": "Questions",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/exams/:examId/exercices/:exerciceId/questions/:questionId"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/exams/:examId/exercices/:exerciceId/questions/:questionId",
    "title": "Edit a question",
    "name": "EditQuestion",
    "group": "Questions",
    "description": "<p>This URL edit a question from its id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "question",
            "description": "<p>An object containing all the data that you want to edit</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"title\": \"Combien vaut 4+8 ?\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "json",
            "optional": false,
            "field": "Question",
            "description": "<p>a JSON object containing the edited document</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/ressources/exams/index.js",
    "groupTitle": "Questions",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/exams/:examId/exercices/:exerciceId/questions/:questionId"
      }
    ]
  }
] });
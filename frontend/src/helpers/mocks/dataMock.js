import moment from "moment";

export const dataMock = {
  "_id": "5c7cfb433cf0582c2548bc8d",
  "title": "Examen 1",
  "instruction": "A propos de cet examen, voici une formule qui peut vous intéresser: E=1/2mc²",
  "reminder": "- Les calculatrices sont interdites \n - Tout objet connecté est interdit",
  "author" : {
  "name": "Yolo",
    "surname": "Swag"
},
  "session": {
  "startDate": "01/01/2019T8:00:00",
  "endDate": "01/01/2019T12:00:00"
},
  "exercices" : [
  {
    "_id": "5a9e7dc7832a690c53650ab1",
    "title": "Jeu du Pendu",
    "estimatedTime": "01:00:00",
    "creationTime": "01/01/2019T07:00:00",
    "questions": [
      {
        "_id": "5a9e7dcjdkfa690c53650ab1",
        "title": "Quelle est la somme de 1+1 ?",
        "scale": 0.5,
        "correction": "2",
        "creationTime": "01/01/2019T07:00:00"
      },
      {
        "_id": "5a9e7jekkfa690c53650ab1",
        "title": "Quelle est la somme de 2+2 ?",
        "scale": 0.75,
        "correction": "4",
        "creationTime": "01/01/2019T07:00:00"
      }
    ],
  },
  {
    "_id": "5a9e7dc7832jfhdc53650ab1",
    "title": "Le théorème de Pythagore",
    "estimatedTime": "00:30:00",
    "creationTime": "01/01/2019T07:15:00",
    "questions": [
      {
        "_id": "5a9e7dlqskfa690c53650ab1",
        "title": "Quelle est la somme de 2*8 ?",
        "scale": 2,
        "correction": "16",
        "creationTime": "01/01/2019T07:15:31"
      },
      {
        "_id": "5a9e7jsqifa690c53650ab1",
        "title": "Quelle est la somme de 4+8 ?",
        "scale": 2.25,
        "correction": "12",
        "creationTime": "01/01/2019T07:16:05"
      }
    ],
  },
  {
    "_id": "5a9e7dc7832a780c53650ab1",
    "title": "Exercice 3",
    "estimatedTime": "01:00:00",
    "creationTime": "01/01/2019T07:00:00",
    "questions": [{
        "_id": "5a9e7dcjdkfa690c53650ab1",
        "title": "Quelle est la somme de 1+1 ?",
        "scale": 0.5,
        "correction": "2",
        "creationTime": "01/01/2019T07:00:00"
      },
      {
        "_id": "5a9e7jekkfa690c53650ab1",
        "title": "Quelle est la somme de 2+2 ?",
        "scale": 0.75,
        "correction": "4",
        "creationTime": "01/01/2019T07:00:00"
      }
    ],
  }
]};

export const session = {
  "name": "EBM",
  "_id": "e22cc200-c140-4977-9b1d-gvrbbb4156",
  "classes": [
    {
      "_id": "e22cc200-c140-4977-9b1d-gvrbbb4156",
      "date": "01/04/2019",
      "startTime" : "08:00:00",
      "endTime" : "12:00:00"
    },
    {
      "_id": "218542ea-28f6-4bda-9bbe-5a36f201ab35",
      "date" : moment().format("DD/MM/YYYY"),
      "startTime" : "08:00:00",
      "endTime" : "12:00:00",
    },
    {
      "_id": "1bd66db2-6d3e-4e9a-b56f-edb7b868a19f",
      "date" : "21/03/2019",
      "startTime" : "13:30:00",
      "endTime" : "15:30:00"
    }
  ]
};

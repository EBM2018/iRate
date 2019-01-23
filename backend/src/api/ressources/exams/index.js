const { Router } = require('express');

const router = new Router();
const examController = require('./controller.js');

/**
 * @api {get} /exam Get all exams
 * @apiName GetAllExams
 * @apiGroup Exams
 * @apiDescription This URL displays a JSON containing all exams from the database
 *
 * @apiSuccessExample {json} Success-Response:
 *[
 *  {
 *    "_id": "5a9e7dc7717a690c53650ab1",
 *    "title": "Examen 1",
 *    "instruction": "A propos de cet examen, voici une formule qui peut vous intéresser: E=1/2mc²",
 *    "reminder": "- Les calculatrices sont interdites \n - Tout objet connecté est interdit"
 *    "author" : {
 *      "name": "Yolo",
 *      "surname": "Swag"
 *    }
 *    "session": {
 *      "startDate": "01/01/2019Z8:00:00"
 *      "endDate": "01/01/2019Z12:00:00"
 *    }
 *    "creationTime": "2018-03-06T11:38:47.160Z",
 *    "__v": 0
 *  },
 *  {
 *    "_id": "5a9e7dc7717a690c57989ab1",
 *    "title": "Examen 2",
 *    "instruction": "Bon courage pour votre epreuve !",
 *    "reminder": "- Tout document autorisés"
 *    "author" : {
 *      "name": "Justin",
 *      "surname": "Bieber"
 *    }
 *    "session": {
 *      "startDate": "02/01/2019Z8:00:00"
 *      "endDate": "02/01/2019Z10:00:00"
 *    }
 *    "creationTime": "2018-04-06T11:38:47.160Z",
 *    "__v": 0
 *  }
 *]
 */
router.get('/', examController.getExams);

/**
 * @api {get} /exam/:examId Get an exam
 * @apiName GetExamById
 * @apiGroup Exams
 * @apiDescription This URL displays a JSON containing an exam from its id
 *
 * @apiSuccessExample {json} Success-Response:
 *  *  {
 *    "_id": "5a9e7dc7717a690c53650ab1",
 *    "title": "Examen 1",
 *    "instruction": "A propos de cet examen, voici une formule qui peut vous intéresser: E=1/2mc²",
 *    "reminder": "- Les calculatrices sont interdites \n - Tout objet connecté est interdit",
 *    "author" : {
 *      "name": "Yolo",
 *      "surname": "Swag"
 *    },
 *    "session": {
 *      "startDate": "01/01/2019T8:00:00"
 *      "endDate": "01/01/2019T12:00:00"
 *    },
 *    "exercices" : [
 *      {
 *        "_id": "5a9e7dc7832a690c53650ab1"
 *        "title": "Exercice 1",
 *        "estimatedTime": "01:00:00",
 *        "creationTime": "01/01/2019T07:00:00",
 *        "questions": [
 *          {
 *            "_id": "5a9e7dcjdkfa690c53650ab1",
 *            "title": "Quelle est la somme de 1+1 ?",
 *            "scale": 0.5,
 *            "creationTime": "01/01/2019T07:00:00"
 *          },
 *          {
 *            "_id": "5a9e7jekkfa690c53650ab1",
 *            "title": "Quelle est la somme de 2+2 ?",
 *            "scale": 0.75,
 *            "creationTime": "01/01/2019T07:00:00"
 *          }
 *        ],
 *      },
 *      {
 *        "_id": "5a9e7dc7832jfhdc53650ab1"
 *        "title": "Exercice 2",
 *        "estimatedTime": "00:30:00",
 *        "creationTime": "01/01/2019T07:15:00",
 *        "questions": [
 *          {
 *            "_id": "5a9e7dlqskfa690c53650ab1",
 *            "title": "Quelle est la somme de 2*8 ?",
 *            "scale": 2,
 *            "creationTime": "01/01/2019T07:15:31"
 *          },
 *          {
 *            "_id": "5a9e7jsqifa690c53650ab1",
 *            "title": "Quelle est la somme de 4+8 ?",
 *            "scale": 2.25,
 *            "creationTime": "01/01/2019T07:16:05"
 *          }
 *        ],
 *      }
 *    ]
 *    "creationTime": "2018-03-06T11:38:47.160Z",
 *    "__v": 0
 *  }
 */

// TODO: Créer les commentaires pour l'API Doc (pour chaque routes !)
router.get('/:examId', examController.getExamById);

/**
 * @api {get} /exam/correction/:examId Get a correction
 * @apiName GetCorrectionById
 * @apiGroup Exams
 * @apiDescription This URL displays a JSON containing a correction for an exam
 *
 * @apiSuccessExample {json} Success-Response:
 *  *  {
 *    "_id": "5a9e7dc7717a690c53650ab1",
 *    "title": "Examen 1",
 *    "instruction": "A propos de cet examen, voici une formule qui peut vous intéresser: E=1/2mc²",
 *    "reminder": "- Les calculatrices sont interdites \n - Tout objet connecté est interdit",
 *    "author" : {
 *      "name": "Yolo",
 *      "surname": "Swag"
 *    },
 *    "session": {
 *      "startDate": "01/01/2019T8:00:00"
 *      "endDate": "01/01/2019T12:00:00"
 *    },
 *    "exercices" : [
 *      {
 *        "_id": "5a9e7dc7832a690c53650ab1"
 *        "title": "Exercice 1",
 *        "estimatedTime": "01:00:00",
 *        "creationTime": "01/01/2019T07:00:00",
 *        "questions": [
 *          {
 *            "_id": "5a9e7dcjdkfa690c53650ab1",
 *            "title": "Quelle est la somme de 1+1 ?",
 *            "scale": 0.5,
 *            "correction": "2"
 *            "creationTime": "01/01/2019T07:00:00"
 *          },
 *          {
 *            "_id": "5a9e7jekkfa690c53650ab1",
 *            "title": "Quelle est la somme de 2+2 ?",
 *            "scale": 0.75,
 *            "correction": "4"
 *            "creationTime": "01/01/2019T07:00:00"
 *          }
 *        ],
 *      },
 *      {
 *        "_id": "5a9e7dc7832jfhdc53650ab1"
 *        "title": "Exercice 2",
 *        "estimatedTime": "00:30:00",
 *        "creationTime": "01/01/2019T07:15:00",
 *        "questions": [
 *          {
 *            "_id": "5a9e7dlqskfa690c53650ab1",
 *            "title": "Quelle est la somme de 2*8 ?",
 *            "scale": 2,
 *            "correction": "16"
 *            "creationTime": "01/01/2019T07:15:31"
 *          },
 *          {
 *            "_id": "5a9e7jsqifa690c53650ab1",
 *            "title": "Quelle est la somme de 4+8 ?",
 *            "scale": 2.25,
 *            "correction": "12"
 *            "creationTime": "01/01/2019T07:16:05"
 *          }
 *        ],
 *      }
 *    ]
 */
router.get('/correction/:examId', examController.getCorrectionById);

/**
 * @api {post} /exam Create a new exam
 * @apiName CreateExam
 * @apiGroup Exams
 * @apiDescription This URL creates a new exam based on its body
 *
 * @apiParamExample {json} Request-Example:
 *   {
 *    "title": "Examen 3",
 *    "instruction": "Je n'ai pas d'instructions spéciales, à vous de jouer !",
 *    "reminders": "Tous documents interdit",
 *    "authorId": "abcdefghjkqspdsqpjpijp86972",
 *    "sessionId": "sqojfdoisqjdoiqj679089076",
 *   }
 *
 */
router.post('/', examController.newExam);
router.patch('/:examId', examController.editExam);
router.delete('/:examId', examController.deleteExamById);

router.post('/:examId/exercice', examController.newExerciceOfExam);
router.patch('/:examId/exercice/:exerciceId', examController.editExercice);
router.delete('/:examId/exercice/:exerciceId', examController.deleteExerciceById);

router.post('/:examId/exercice/:exerciceId/question', examController.newQuestionOfExercice);
router.patch('/:examId/exercice/:exerciceId/question/:questionId', examController.editQuestionById);
router.delete('/:examId/exercice/:exerciceId/question/:questionId', examController.deleteQuestionById);

module.exports = router;

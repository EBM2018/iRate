const { Router } = require('express');

const router = new Router();
const ExamController = require('./controller.js');
const ExamMiddlewares = require('./middlewares.js');

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
router.get('/', ExamController.getExams);

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
router.get('/:examId', ExamMiddlewares.findExamOrReturn, ExamController.getExamById);

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
router.get('/correction/:examId', ExamController.getCorrectionById);

/**
 * @api {post} /exam Create a new exam
 * @apiName CreateExam
 * @apiGroup Exams
 * @apiDescription This URL creates a new exam based on the body request
 *
 * @apiParam {json} exam An object containing all the data necessary for its creation
 * @apiParamExample {json} Request-Example:
 *   {
 *    "title": "Examen 3",
 *    "instruction": "Je n'ai pas d'instructions spéciales, à vous de jouer !",
 *    "reminders": "Tous documents interdit",
 *    "authorId": "abcdefghjkqspdsqpjpijp86972",
 *    "sessionId": "sqojfdoisqjdoiqj679089076",
 *   }
 *
 * @apiSuccess (201) {json} Exam a JSON object containing the created document
 */
router.post('/', ExamController.newExam);

/**
 * @api {patch} /exam/:examId Edit an exam
 * @apiName PatchExam
 * @apiGroup Exams
 * @apiDescription This URL edit an exam from its id.
 *
 * @apiParam {json} exam an object with the information you want to edit.
 * @apiParamExample {json} Request-Example:
 *   {
 *    "title": "Examen 3",
 *    "instruction": "Je n'ai pas d'instructions spéciales, à vous de jouer !",
 *    "reminders": "Tous documents interdit",
 *    "authorId": "abcdefghjkqspdsqpjpijp86972",
 *    "sessionId": "sqojfdoisqjdoiqj679089076",
 *   }
 *
 * @apiSuccess (201) {json} Exam a JSON object containing the edited document
 */
router.patch('/:examId', ExamController.editExam);

/**
 * @api {delete} /exam/:examId Delete an exam
 * @apiName DeleteExam
 * @apiGroup Exams
 * @apiDescription This URL deletes an exam from its id.
 *
 * @apiSuccess (204) {null} null Empty date to return
 *
 */
router.delete('/:examId', ExamMiddlewares.findExamOrReturn, ExamController.deleteExamById);

/**
 * @api {post} /exam/:examId/exercice Create a new exercice
 * @apiName CreateExercice
 * @apiGroup Exercices
 * @apiDescription This URL creates a new exercice in the exam requested in the url
 *
 * @apiParam {json} exercice An object containing all the data necessary for its creation
 * @apiParamExample {json} Request-Example:
 *   {
 *    "title": "Exercice 1",
 *    "estimatedTime" : "00:45:00",
 *   }
 *
 * @apiSuccess (201) {json} Exercice a JSON object containing the created document
 */
router.post('/:examId/exercice', ExamMiddlewares.findExamOrReturn, ExamController.newExerciceOfExam);

/**
 * @api {patch} /exam/:examId/exercice/:exerciceId Edit an exercice
 * @apiName EditExercice
 * @apiGroup Exercices
 * @apiDescription This URL edit an exercice from its id
 *
 * @apiParam {json} exercice An object with the information you want to edit.
 * @apiParamExample {json} Request-Example:
 *   {
 *    "title": "Exercice 6",
 *   }
 *
 * @apiSuccess (201) {json} Exercice a JSON object containing the edited document
 */
router.patch('/:examId/exercice/:exerciceId', ExamController.editExercice);

/**
 * @api {delete} /exam/:examId/exercice/:exerciceId Delete an exercice
 * @apiName DeleteExercice
 * @apiGroup Exercices
 * @apiDescription This URL deletes an exercice of an exam based on both ids.
 *
 * @apiSuccess (204) {null} null Empty date to return
 *
 */
router.delete('/:examId/exercice/:exerciceId', ExamMiddlewares.findExamOrReturn, ExamMiddlewares.findExerciceOrReturn, ExamController.deleteExerciceById);

/**
 * @api {post} /exam/:examId/exercice/:exerciceId/question Create a new question
 * @apiName CreateQuestion
 * @apiGroup Questions
 * @apiDescription This URL creates a new question in the exercice requested
 *
 * @apiParam {json} question An object containing all the data necessary for its creation
 * @apiParamExample {json} Request-Example:
 *   {
 *    "title": "Combien vaut 2+2 ?",
 *    "scale": 2.5
 *    "correction": "2+2 = 4",
 *   }
 *
 * @apiSuccess (201) {json} Question a JSON object containing the created document
 */
router.post('/:examId/exercice/:exerciceId/question', ExamController.newQuestionOfExercice);

/**
 * @api {patch} /exam/:examId/exercice/:exerciceId/question/:questionId Edit a question
 * @apiName EditQuestion
 * @apiGroup Questions
 * @apiDescription This URL edit a question from its id
 *
 * @apiParam {json} question An object containing all the data that you want to edit
 * @apiParamExample {json} Request-Example:
 *   {
 *    "title": "Combien vaut 4+8 ?",
 *   }
 *
 * @apiSuccess (201) {json} Question a JSON object containing the edited document
 */
router.patch('/:examId/exercice/:exerciceId/question/:questionId', ExamController.editQuestionById);


/**
 * @api {delete} /exam/:examId/exercice/:exerciceId/question/:questionId Delete a question
 * @apiName DeleteQuestion
 * @apiGroup Questions
 * @apiDescription This URL deletes a question from its id
 *
 *
 * @apiSuccess (204) {null} null Empty date to return
 */
router.delete('/:examId/exercice/:exerciceId/question/:questionId', ExamMiddlewares.findExamOrReturn, ExamMiddlewares.findExerciceOrReturn, ExamMiddlewares.findQuestionOrReturn, ExamController.deleteQuestionById);

module.exports = router;

const { Router } = require('express');

const router = new Router();
const CopyController = require('./controller.js');
const ExamMiddlewares = require('../exams/middlewares');
const CopyMiddlewares = require('../copies/middlewares');

/**
 * @api {get} /copies/:examId Get all copies related to an exam
 * @apiName GetAllCopies
 * @apiGroup Copies
 * @apiDescription Returns a JSON containing all the copies for a given exam
 *
 * @apiSuccessExample {json} Success-Response:
 *[
 *  {
 *    "_id": "5a9e7dc7717a690c53650ab1",
 *    "type": "Copies"
 *    "exam": "5pod76h7a690c53650ab1",
 *    "title": "Copies 1",
 *    "author" : {
 *      "name": "Yolo",
 *      "surname": "Swag"
 *    }
 *    "answers": [
 *      {
 *          "creationTime": "2018-03-06T11:38:47.160Z",
 *          "content": "Voici une réponse à une question",
 *          "_id": "5a9e7d55717a690c53650ab1",
 *          "grade": 18,
 *          "question": {
 *            "_id": "5a9e7dlqskfa690c53650ab1",
 *            "title": "Quelle est la somme de 2*8 ?",
 *            "scale": 2,
 *            "creationTime": "01/01/2019T07:15:31"
 *          },
 *          "feedback": [
 *              {
 *                  "_id": "5a9e7dlqskfa690c53650ab1",
 *                  "content": "Votre réponse est bonne mais aurait pu être davantage élaborée",
 *                  "creationTime": "01/01/2019T07:15:31"
 *              }
 *          ]
 *
 *      }
 *    ]
 *    "submissionTime": "2018-03-06T11:38:47.160Z",
 *    "creationTime": "2018-03-06T11:38:47.160Z",
 *    "__v": 0
 *  }
 *]
 */
router.get('/:examId', ExamMiddlewares.findExamOrReturn, CopyController.getCopies);

/**
 * @api {get} /copies/:copyId Get a specific copy
 * @apiName GetCopyById
 * @apiGroup Copies
 * @apiDescription Returns a JSON containing a given copy ID
 *
 * @apiSuccessExample {json} Success-Response:
 *  {
 *    "_id": "5a9e7dc7717a690c53650ab1",
 *    "type": "Copies"
 *    "exam": "5pod76h7a690c53650ab1",
 *    "title": "Copies 1",
 *    "author" : {
 *      "name": "Yolo",
 *      "surname": "Swag"
 *    }
 *    "answers": [
 *      {
 *          "creationTime": "2018-03-06T11:38:47.160Z",
 *          "content": "Voici une réponse à une question",
 *          "_id": "5a9e7d55717a690c53650ab1",
 *          "grade": 18,
 *          "question": {
 *            "_id": "5a9e7dlqskfa690c53650ab1",
 *            "title": "Quelle est la somme de 2*8 ?",
 *            "scale": 2,
 *            "creationTime": "01/01/2019T07:15:31"
 *          },
 *          "feedback": [
 *              {
 *                  "_id": "5a9e7dlqskfa690c53650ab1",
 *                  "content": "Votre réponse est bonne mais aurait pu être davantage élaborée",
 *                  "creationTime": "01/01/2019T07:15:31"
 *              }
 *          ]
 *
 *      }
 *    ]
 *    "submissionTime": "2018-03-06T11:38:47.160Z",
 *    "creationTime": "2018-03-06T11:38:47.160Z",
 *    "__v": 0
 *  }
 */
router.get('/:copyId', CopyController.getCopy);

/**
 * @api {get} /copies/answers/:answerId Get a specific answer
 * @apiName GetAnswerById
 * @apiGroup Answers
 * @apiDescription Returns a JSON containing a given answer ID
 *
 * @apiSuccessExample {json} Success-Response:
 *  {
 *    "_id": "5a9e7dc7717a690c53650ab1",
 *    "copyId": "5pod76h7a690c53650ab1",
 *    "type": "Answers",
 *    "creationTime": "2018-03-06T11:38:47.160Z",
 *    "content": "Voici une réponse à une question",
 *    "grade": 18,
 *    "question": {
 *       "_id": "5a9e7dlqskfa690c53650ab1",
 *       "title": "Quelle est la somme de 2*8 ?",
 *       "scale": 2,
 *       "creationTime": "01/01/2019T07:15:31"
 *     },
 *     "feedback": [
 *        {
 *          "_id": "5a9e7dlqskfa690c53650ab1",
 *          "content": "Votre réponse est bonne mais aurait pu être davantage élaborée",
 *          "creationTime": "01/01/2019T07:15:31"
 *        }
 *    ]
 *  }
 */
router.get('/answers/:answerId', CopyController.getAnswer);

/**
 * @api {post} /copy Create a new copy
 * @apiName CreateCopy
 * @apiGroup Copies
 * @apiDescription This URL creates a new copy
 *
 * @apiParam {json} copy An object containing all the data necessary for its creation
 * @apiParamExample {json} Request-Example:
 *   {
 *    "title": "Copies 1",
 *    "authorId": "abcdefghjkqspdsqpjpijp86972",
 *    "exam": "sqojfdoisqjdoiqj679089076",
 *   }
 *
 * @apiSuccess (201) {json} Copy a JSON object containing the created copy
 */
router.post('/', CopyMiddlewares.findExamOfCopy, CopyController.newCopy);

/**
 * @api {post} /copies/:copyId/answers Create a new answer associated with a copy
 * @apiName CreateAnswer
 * @apiGroup Answers
 * @apiDescription This URL creates a new copy
 *
 * @apiParam {json} answer An object containing all the data necessary for its creation
 * @apiParamExample {json} Request-Example:
 *   {
 *    "content": "Voici une réponse à une question",
 *    "_id": "5a9e7d55717a690c53650ab1",
 *    "grade": 18,
 *    "questionId": "5slh7d55717a690c53650ab1",
 *    "copyId": "5a9e7d55717a690c53650ajy",
 *    "feedbackId": "5a9pou8717a690c53650ab1"
 *   }
 *
 * @apiSuccess (201) {json} Copy a JSON object containing the created answer
 */
router.post('/:copyId/answers', CopyMiddlewares.findCopyOrReturn, CopyController.newAnswer);

/**
 * @api {patch} /copies/:copyId Edit a copy
 * @apiName EditCopies
 * @apiGroup Copies
 * @apiDescription This URL edit a copy from its id
 *
 * @apiParam {json} copy An object with the information you want to edit.
 * @apiParamExample {json} Request-Example:
 *   {
 *    "title": "Exercice 6",
 *   }
 *
 * @apiSuccess (201) {json} Copy a JSON object containing the edited copy
 */
router.patch('/:copyId', CopyMiddlewares.findCopyOrReturn, CopyController.editCopy);

/**
 * @api {delete} /copies/:copyId Delete a copy
 * @apiName deleteCopy
 * @apiGroup Copies
 * @apiDescription This deletes a copy
 *
 * @apiSuccess (204) {null} null Empty data
 */
router.delete('/:copyId', CopyMiddlewares.findCopyOrReturn, CopyController.deleteCopy);

/**
 * @api {patch} /copies/:copyId/answers/:answerId Edit a copy
 * @apiName EditAnswer
 * @apiGroup Answers
 * @apiDescription This URL edits the answer of a copy
 *
 * @apiParam {json} copy An object with the information you want to edit.
 * @apiParamExample {json} Request-Example:
 *   {
 *    "title": "Exercice 6",
 *   }
 *
 * @apiSuccess (201) {json} Copy a JSON object containing the edited answer
 */
router.patch('/:copyId/answers/:answerId', CopyMiddlewares.findCopyOrReturn, CopyMiddlewares.findAnswerOrReturn, CopyController.editAnswer);

/**
 * @api {delete} /copies/:copyId/answers/:answerId Delete a copy
 * @apiName deleteAnswer
 * @apiGroup Answers
 * @apiDescription This deletes an answer of a copy
 *
 * @apiSuccess (204) {null} null Empty data
 */
router.delete('/:copyId/answers/:answerId', CopyMiddlewares.findCopyOrReturn, CopyMiddlewares.findAnswerOrReturn, CopyController.deleteAnswer);

module.exports = router;

const { Router } = require('express');

const router = new Router();
const CopyController = require('./controller.js');

/**
 * @api {get} /copy/:examId Get all copies related to an exam
 * @apiName GetAllCopies
 * @apiGroup Copies
 * @apiDescription Returns a JSON containing all the copies for a given exam
 *
 * @apiSuccessExample {json} Success-Response:
 *[
 *  {
 *    "_id": "5a9e7dc7717a690c53650ab1",
 *    "type": "Copies"
 *    "examId": "5pod76h7a690c53650ab1",
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
router.get('/:examId', CopyController.getCopies);

/**
 * @api {get} /copy/:copyId Get a specific copy
 * @apiName GetCopyById
 * @apiGroup Copies
 * @apiDescription Returns a JSON containing a given copy ID
 *
 * @apiSuccessExample {json} Success-Response:
 *  {
 *    "_id": "5a9e7dc7717a690c53650ab1",
 *    "type": "Copies"
 *    "examId": "5pod76h7a690c53650ab1",
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
 * @api {get} /copy/answer/:answerId Get a specific answer
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
router.get('/answer/:answerId', CopyController.getAnswer);

/**
 * @api {post} /copy Create a new copy
 * @apiName CreateCopy
 * @apiGroup Copies
 * @apiDescription This URL creates a new copy
 *
 * @apiParam {json} An object containing all the data necessary for its creation
 * @apiParamExample {json} Request-Example:
 *   {
 *    "title": "Copies 1",
 *    "authorId": "abcdefghjkqspdsqpjpijp86972",
 *    "examId": "sqojfdoisqjdoiqj679089076",
 *   }
 *
 * @apiSuccess (201) {json} Copy a JSON object containing the created copy
 */
router.post('/', CopyController.newCopy);

/**
 * @api {post} /copy/:copyId/answer Create a new answer associated with a copy
 * @apiName CreateAnswer
 * @apiGroup Answers
 * @apiDescription This URL creates a new copy
 *
 * @apiParam {json} An object containing all the data necessary for its creation
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
router.post('/:copyId/answer', CopyController.newAnswer);

/**
 * @api {patch} /copy/:copyId Edit a copy
 * @apiName EditCopies
 * @apiGroup Copies
 * @apiDescription This URL edit a copy from its id
 *
 * @apiParam {json} An object with the information you want to edit.
 * @apiParamExample {json} Request-Example:
 *   {
 *    "title": "Exercice 6",
 *   }
 *
 * @apiSuccess (201) {json} Copy a JSON object containing the edited copy
 */
router.patch('/:copyId', CopyController.editCopy);

/**
 * @api {delete} /copy/:copyId Delete a copy
 * @apiName DeleteCopyById
 * @apiGroup Copies
 * @apiDescription This deletes a copy
 *
 * @apiSuccess (204) {null} Empty data
 */
router.delete('/:copyId', CopyController.deleteCopyById);

module.exports = router;

const { Router } = require('express');

const router = new Router();
const examController = require('./controller.js');

/**
 * @api {get} /feedback/:questionId Get feedback from a question
 * @apiName GetFeedbackByQuestion
 * @apiGroup Feedbacks
 * @apiDescription This URL display a JSON containing all the feedback of a question
 *
 * @apiSuccessExample {json} Success-Response:
 *[
 *  {
 *    "_id": "5a9e7dc7717g453g323650ab1",
 *    "title": "Feedback 1",
 *    "content": "Faux, la notion de async est à revoir",
 *    "creationTime": "2018-03-06T11:38:47.160Z",
 *    "__v": 0
 *  },
 *  {
 *    "_id": "5a9e7dc7Gefjie823650ab1",
 *    "title": "Feedback 2",
 *    "content": "Très bien, la notion est assimilée",
 *    "creationTime": "2018-03-06T11:38:47.160Z",
 *    "__v": 0
 *  }
 *]
 */
router.get('/:questionId', examController.getFeedbackByQuestion);
/**
 * @api {post} /feedback/ Create a new feedback
 * @apiName CreateFeedback
 * @apiGroup Feedbacks
 * @apiDescription This URL creates a new feedback in the question requested
 *
 * @apiParam {json} An object containing all the data necessary for its creation
 * @apiParamExample {json} Request-Example:
 *   {
 *    "_id": "5a9e7dcgrfeie823650ab1",
 *    "title": "Feedback 4",
 *    "content": "A revoir...",
 *    "creationTime": "2019-01-02T11:38:47.160Z",
 *   }
 *
 * @apiSuccess (201) {json} a JSON object containing the created document
 */
router.post('/', examController.newFeedback);
/**
 * @api {patch} /feedback/:feedbackId Edit a feedback
 * @apiName EditFeedback
 * @apiGroup Feedbacks
 * @apiDescription This URL edit a feedback from its id
 *
 * @apiParam {json} An object containing all the data that you want to edit
 * @apiParamExample {json} Request-Example:
 *   {
 *    "content": "Le design pattern n'est pas assimilé",
 *   }
 *
 * @apiSuccess (201) {json} a JSON object containing the edited document
 */
router.patch('/:feedbackId', examController.editFeedbackById);
/**
 * @api {delete} /feedback/:feedbackId Delete a feedback
 * @apiName DeleteFeedback
 * @apiGroup Feedbacks
 * @apiDescription This URL deletes a question from its id
 * @apiSuccess (204) {null} Empty date to return
 */
router.delete('/:feedbackId', examController.deleteFeedbackById);

module.exports = router;

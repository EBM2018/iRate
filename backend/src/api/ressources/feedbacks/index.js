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
 *    "title": "Feedback 2,
 *    "content": "Très bien, la notion est assimilée",
 *    "creationTime": "2018-03-06T11:38:47.160Z",
 *    "__v": 0
 *  }
 *]
 */
router.get('/:questionId', examController.getFeedbackByQuestion);
router.post('/', examController.newFeedback);
router.patch('/', examController.editFeedbackById);
router.delete('/', examController.deleteFeedbackById);

module.exports = router;

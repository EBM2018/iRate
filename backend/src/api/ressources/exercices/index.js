const { Router } = require('express');

const router = new Router();

/**
 * @api {get} /users Get all users
 * @apiName GetAllUsers
 * @apiGroup Users
 * @apiDescription Cette URL affiche un JSON contenant tous les users de la BDD
 *
 * @apiSuccessExample {json} Success-Response:
 *[
 *  {
 *    "creationTime": "2018-03-06T11:38:47.160Z",
 *    "_id": "5a9e7dc7717a690c53650ab1",
 *    "name": "Jean-Victor",
 *    "linkappId": "jvhap"
 *    "__v": 0
 *  },
 *  {
 *    "creationTime": "2018-03-06T11:41:13.491Z",
 *    "_id": "5a9e7e591817c20db4ef0e40",
 *    "name": "Philippe JailBreaklivet",
 *    "linkappId": "philJS"
 *    "__v": 0
 *  }
 *]
 */
router.get('/', (req, res) => res.send('Hello, World!'));
//router.get('/', controller.getAll);


module.exports = router;
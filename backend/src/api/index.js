const { Router } = require('express');

const router = new Router();

/**
 * @api {get} / Hello World
 * @apiName GetHome
 * @apiGroup Static Pages
 * @apiDescription Cette URL affiche un simple message Hello World
 *
 * Il est possible d'écrire des messages sur plusieurs lignes dans la description.
 * @apiSuccessExample {html} Success-Response:
 *     HTTP/1.1 200 OK
 *     Hello, World!
 */
router.get('/', (req, res) => res.send('Hello, World!'));

/**
 * @api {get} /:name Say hello to a specific name
 * @apiName GetName
 * @apiGroup Static Pages
 * @apiDescription Cette URL affiche un message Hello personnalisé
 *
 * @apiParam  {String} name Nom de la personne à saluer
 * @apiParamExample  {String} Request-Example:
     name: Nymous
 *
 * @apiSuccessExample {html} Success-Response:
     HTTP/1.1 200 OK
     Hello, Nymous!
 */
router.get('/:name', (req, res) => res.send(`Hello, ${req.params.name}!`));

module.exports = router;

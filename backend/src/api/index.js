const { Router } = require('express');

const router = new Router();

router.use('/exams', require('./ressources/exams'));
router.use('/copies', require('./ressources/copies'));

module.exports = router;

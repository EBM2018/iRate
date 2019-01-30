const { Router } = require('express');

const router = new Router();

router.use('/exams', require('./ressources/exams'));

module.exports = router;

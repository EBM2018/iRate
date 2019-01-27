const { Router } = require('express');

const router = new Router();

// router.use('/documents', require('./resources/documents'));

router.use('/exam', require('./ressources/exams'));

module.exports = router;

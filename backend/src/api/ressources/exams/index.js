const { Router } = require('express');
const router = new Router();
const examController = require('./exam.controller.js');

router.get('/', examController.getExams);
router.get('/:id', examController.getExamById);

module.exports = router;

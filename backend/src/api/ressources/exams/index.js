const { Router } = require('express');
const router = new Router();
const examController = require('./exam.controller.js');

router.get('/', examController.getExams);
router.get('/:id', examController.getExamById);
router.get('/correction/:id', examController.getCorrectionById);
router.post('/', examController.newExam);
router.patch('/', examController.editExam);
router.delete('/', examController.deleteExamById);

router.post('/exercice', examController.newExerciceOfExam);
router.patch('/exercice', examController.editExercice);
router.delete('/exercice', examController.deleteExerciceById);

router.post('/exercice/question', examController.newQuestionOfExercice);
router.patch('/exercice/question', examController.editQuestionById);
router.delete('/exercice/question', examController.deleteQuestionById);

module.exports = router;

const { Router } = require('express');
const router = new Router();
const examController = require('./exam.controller.js');

router.get('/', examController.getExams);
router.get('/:id', examController.getExamById);
router.get('/correction/:id', examController.getCorrectionById);
router.post('/', examController.newExam);
router.delete('/', examController.deleteExamById);

router.post('/exercice', examController.newExerciceOfExam);
router.patch('/exercie', examController.editExercice);
router.delete('/exercice', examController.deleteExerciceById);

router.post('/exercice/question', examController.newQuestionOfExercice);
router.patch('/exercice/question', examController.editQuestionById);
router.delete('/exercice/question', examController.deleteQuestionById);


module.exports = router;

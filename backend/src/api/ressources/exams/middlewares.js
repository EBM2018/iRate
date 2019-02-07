const ExamData = require('../../../services/exam/data');
const ExerciceData = require('../../../services/exercice/data');
const QuestionData = require('../../../services/question/data');

module.exports = {
  findExamOrReturn: async (req, res, next) => {
    if (req.params.examId) {
      const exam = await ExamData.getById(req.params.examId);
      if (!exam) {
        return res.status(404).send('Exam Not found');
      }
      res.locals.exam = exam;
      return next();
    }
    return res.status(400).send('Bad Request');
  },
  findExerciceOrReturn: async (req, res, next) => {
    if (req.params.exerciceId) {
      const exercice = await ExerciceData.getById(req.params.exerciceId);
      if (!exercice) {
        return res.status(404).send('Exercice Not found');
      }
      res.locals.exercice = exercice;
      return next();
    }
    return res.status(400).send('Bad Request');
  },
  findQuestionOrReturn: async (req, res, next) => {
    if (req.params.questionId) {
      const question = await QuestionData.getById(req.params.questionId);
      if (!question) {
        return res.status(404).send('Question Not found');
      }
      res.locals.question = question;
      return next();
    }
    return res.status(400).send('Bad Request');
  },
};

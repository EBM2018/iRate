const ExamData = require('../../../services/exam/data');

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
};

const ExamData = require('../../../services/exam/data');
const CopyData = require('../../../services/copy/data');
const AnswerData = require('../../../services/answer/data');


module.exports = {
  findExamOfCopy: async (req, res, next) => {
    if (req.body.exam) {
      const exam = await ExamData.getById(req.body.exam);
      if (!exam) {
        return res.status(404).send('Exam Not found');
      }
      res.locals.exam = exam;
      return next();
    }
    return res.status(400).send('Bad Request');
  },
  findCopyOrReturn: async (req, res, next) => {
    if (req.params.copyId) {
      const copy = await CopyData.getById(req.params.copyId);
      if (!copy) {
        return res.status(404).send('Copy Not found');
      }
      res.locals.copy = copy;
      return next();
    }
    return res.status(400).send('Bad Request');
  },
  findAnswerOrReturn: async (req, res, next) => {
    if (req.params.answerId) {
      const answer = await AnswerData.getById(req.params.answerId);
      if (!answer) {
        return res.status(404).send('Answer Not found');
      }
      res.locals.answer = answer;
      return next();
    }
    return res.status(400).send('Bad Request');
  },
};

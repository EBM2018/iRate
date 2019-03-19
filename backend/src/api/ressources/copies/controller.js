const CopyData = require('../../../services/copy/data');
const AnswerData = require('../../../services/answer/data');

const controller = {
  async getCopies(req, res, next) {
    const { exam } = res.locals;
    try {
      const copies = await CopyData.getCopiesByExam(exam._id);
      res.status(200).json(copies);
    } catch (error) {
      next(error);
    }
  },

  async getCopy(req, res, next) {
    try {
      res.status(200).json(res.locals.copy).send();
    } catch (error) {
      next(error);
    }
  },
  async getAnswer(req, res, next) {
    try {
      res.status(200).json(res.locals.answer).send();
    } catch (error) {
      next(error);
    }
  },
  async newCopy(req, res, next) {
    if (req.body) {
      try {
        const result = await CopyData.create(req.body);
        return res.status(200).json(result);
      } catch (error) {
        return next(error);
      }
    } return res.status(400).send('Bad Request...');
  },
  async newAnswer(req, res, next) {
    if (req.body) {
      try {
        const { copy } = res.locals;
        const result = await AnswerData.create(req.body, copy);
        return res.status(200).json(result);
      } catch (error) {
        return next(error);
      }
    } return res.status(400).send('Bad Request...');
  },
  async editCopy(req, res, next) {
    const { copy } = res.locals;
    if (req.body) {
      try {
        await CopyData.update(copy._id, req.body);
        const result = await CopyData.getById(req.body._id);
        return res.status(200).json(result);
      } catch (error) {
        return next(error);
      }
    } return res.status(400).send('Bad Request...');
  },
  async deleteCopy(req, res, next) {
    try {
      res.locals.copy.remove();
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  },
  async editAnswer(req, res, next) {
    const { answer } = res.locals;
    if (req.body) {
      try {
        await AnswerData.update(answer._id, req.body);
        const result = await AnswerData.getById(answer._id);
        return res.status(200).json(result);
      } catch (error) {
        return next(error);
      }
    }
    return res.status(400).send('Bad Request...');
  },
  async deleteAnswer(req, res, next) {
    try {
      res.locals.answer.remove();
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  },

};
module.exports = controller;

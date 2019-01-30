const ExamData = require('../../../services/exam/data');
const ExerciceData = require('../../../services/exercice/data');
const QuestionData = require('../../../services/question/data');

const controller = {
  async getExams(req, res) {
    const exams = await ExamData.getAll();
    res.status(200).json(exams);
  },

  // TODO: ATTENTION A NE PAS ENVOYER LA CORRECTION D'UNE QUESTION.
  async getExamById(req, res) {
    if (req.params.examId) {
      const exam = await ExamData.getById(req.params.examId);
      if (!exam) { return res.status(404).send('Not found'); }
      return res.status(200).send(exam);
    } return res.status(400).send('Bad Request...');
  },

  getCorrectionById(req, res) {
    if (req.params.id) {
      return res.status(200).send(req.params.id);
    } return res.status(400).send('Bad Request...');
  },

  async newExam(req, res, next) {
    if (req.body) {
      try {
        const result = await ExamData.create(req.body);
        return res.status(200).json(result);
      } catch (error) {
        return next(error);
      }
    } return res.status(400).send('Bad Request...');
  },

  async newExerciceOfExam(req, res, next) {
    if (req.body) {
      try {
        const exam = await ExamData.getById(req.params.examId);
        if (!exam) { return res.status(404).send('Not found'); }
        const result = await ExerciceData.create(req.body, exam);
        return res.status(200).json(result);
      } catch (error) {
        return next(error);
      }
    }
    return res.status(400).send('Bad Request...');
  },

  async editExercice(req, res, next) {
    if (req.body) {
      try {
        const result = await ExerciceData.update(req.params.exerciceId, req.body);
        if (!result) {
          return res.status(404).send('Exercice not Found');
        }
        return res.status(200).json(result);
      } catch (error) {
        return next(error);
      }
    } return res.status(400).send('Bad Request...');
  },

  async editExam(req, res, next) {
    if (req.body) {
      try {
        const result = await ExamData.update(req.params.examId, req.body);
        if (!result) {
          return res.status(404).send('Exam not Found');
        }
        return res.status(200).json(result);
      } catch (error) {
        return next(error);
      }
    } return res.status(400).send('Bad Request...');
  },

  /**
   * Add a new question to an existing exercice
   *
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   */
  async newQuestionOfExercice(req, res, next) {
    if (req.body) {
      try {
        const exercice = await ExerciceData.getById(req.params.exerciceId);
        if (!exercice) {
          return res.status(404).send('Not found');
        }
        const result = await QuestionData.create(req.body, exercice);
        return res.status(200).json(result);
      } catch (error) {
        return next(error);
      }
    }
    return res.status(400).send('Bad Request...');
  },

  /**
   * Edit a question based on the ID
   *
   * @param {Object} req
   * @param {Object} res
   * @param {Object} next
   */
  async editQuestionById(req, res, next) {
    if (req.body) {
      try {
        const result = await QuestionData.update(req.params.questionId, req.body);
        if (!result) {
          return res.status(404).send('Not Found');
        }
        return res.status(200).json(result);
      } catch (error) {
        return next(error);
      }
    }
    return res.status(400).send('Bad Request...');
  },

  deleteExamById(req, res) {
    if (req.params.id) {
      return res.status(200).send(req.params.id);
    } return res.status(400).send('Bad Request...');
  },

  deleteExerciceById(req, res) {
    if (req.params.id) {
      return res.status(200).send(req.params.id);
    } return res.status(400).send('Bad Request...');
  },

  deleteQuestionById(req, res) {
    if (req.params.id) {
      return res.status(200).send(req.params.id);
    } return res.status(400).send('Bad Request...');
  },

};

module.exports = controller;

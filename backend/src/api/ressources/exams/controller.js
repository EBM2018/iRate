const ExamData = require('../../../services/exam/data');
const ExerciceData = require('../../../services/exercice/data');
const QuestionData = require('../../../services/question/data');

const controller = {
  async getExams(req, res) {
    const exams = await ExamData.getAll();
    res.status(200).json(exams);
  },

  // TODO: ATTENTION A NE PAS ENVOYER LA CORRECTION D'UNE QUESTION.
  getExamById(req, res) {
    if (req.params.id) {
      return res.status(200).send(req.params.id);
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
        const result = await ExerciceData.create(req.body, req.params.examId);
        return res.status(200).json(result);
      } catch (error) {
        return next(error);
      }
    }
    return res.status(400).send('Bad Request...');
  },

  editExercice(req, res) {
    if (req.body) {
      return res.status(200).json(req.body);
    } return res.status(400).send('Bad Request...');
  },

  editExam(req, res) {
    if (req.body) {
      return res.status(200).json(req.body);
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
        const result = await QuestionData.create(req.body, req.params.exerciceId);
        return res.status(200).json(result);
      } catch (error) {
        return next(error);
      }
    }
    return res.status(400).send('Bad Request...');
  },

  editQuestionById(req, res) {
    if (req.body) {
      return res.status(200).json(req.body);
    } return res.status(400).send('Bad Request...');
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

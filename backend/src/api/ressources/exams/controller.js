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
    return res.status(200).send(res.locals.exam);
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
        const { exam } = res.locals;
        const result = await ExerciceData.create(req.body, exam);
        return res.status(200).json(result);
      } catch (error) {
        return next(error);
      }
    }
    return res.status(400).send('Bad Request...');
  },

  async editExercice(req, res, next) {
    const { exam, exercice } = res.locals;
    if (req.body) {
      try {
        await ExerciceData.updateOrderOfOtherExercicesIfNeeded(exam, exercice, req.body.order);
        await ExerciceData.update(exercice._id, req.body);
        const result = await ExerciceData.getById(req.body._id);
        return res.status(200).json(result);
      } catch (error) {
        return next(error);
      }
    } return res.status(400).send('Bad Request...');
  },

  async editExam(req, res, next) {
    const { exam } = res.locals;
    if (req.body) {
      try {
        exam.update(req.body);
        await exam.save();
        return res.status(200).json(req.body);
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
    const { question } = res.locals;
    if (req.body) {
      try {
        await question.updateOne(req.body);
        await question.save();
        return res.status(200).json(req.body);
      } catch (error) {
        return next(error);
      }
    }
    return res.status(400).send('Bad Request...');
  },

  async deleteExamById(req, res, next) {
    try {
      res.locals.exam.remove();
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  },

  async deleteExerciceById(req, res, next) {
    const { exercice, exam } = res.locals;
    if (exercice) {
      try {
        const deletePromise = exercice.delete();
        exam.exercices = exam.exercices.filter(id => id !== exercice.id);
        const savePromise = exam.save();
        await Promise.all([deletePromise, savePromise]);
        return res.status(204).send();
      } catch (error) {
        next(error);
      }
    } return res.status(400).send('Bad Request...');
  },

  async deleteQuestionById(req, res, next) {
    const { exercice, question } = res.locals;
    if (question) {
      try {
        const deletePromise = question.delete();
        exercice.questions = exercice.questions.filter(id => id !== question.id);
        const savePromise = exercice.save();
        await Promise.all([deletePromise, savePromise]);
        return res.status(204).send();
      } catch (error) {
        next(error);
      }
    }
    return res.status(400).send('Bad Request...');
  },

};

module.exports = controller;

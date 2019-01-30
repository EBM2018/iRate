/* eslint-disable no-trailing-spaces */
// const exam = require('../../../services/exam/model');

const controller = {
  getExams(req, res) {
    return res.status(200).send('It Worked...');
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

  newExam(req, res) {
    if (req.body) {
      return res.status(200).json(req.body);
    } return res.status(400).send('Bad Request...');
  },

  newExerciceOfExam(req, res) {
    if (req.body) {
      return res.status(200).json(req.body);
    } return res.status(400).send('Bad Request...');
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

  newQuestionOfExercice(req, res) {
    if (req.body) {
      return res.status(200).json(req.body);
    } return res.status(400).send('Bad Request...');
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

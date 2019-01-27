// the line below is commented for now as we don't need
// the model for now. Also note that as a convention, models start with
// a capital letter.
// const Feedback = require('./../../../services/feedback/model');

const controller = {
  getFeedbackByQuestion(req, res) {
    if (req.params.id) {
      return res.status(200).send(req.params.id);
    } return res.status(400).send('Bad Request...');
  },
  newFeedback(req, res) {
    if (req.body) {
      return res.status(200).json(req.body);
    } return res.status(400).send('Bad Request...');
  },
  editFeedbackById(req, res) {
    if (req.params.id) {
      return res.status(200).send(req.params.id);
    } return res.status(400).send('Bad Request...');
  },
  deleteFeedbackById(req, res) {
    if (req.params.id) {
      return res.status(200).send(req.params.id);
    } return res.status(400).send('Bad Request...');
  },
};

module.exports = controller;

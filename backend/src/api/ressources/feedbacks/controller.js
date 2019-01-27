/* eslint-disable no-trailing-spaces */
const feedback = require('../../../services/feedbacks/model');

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
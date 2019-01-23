const exam = require('./exam.controller');

const examController = {
  getExams(req, res) {
    return res.status(200).send('It Worked...');
  },

  getExamById(req, res) {
    if(req.params.id) {
      return res.status(200).send(req.params.id);
    } else return res.status(400).send("Bad Request...");
  },
};

module.exports = examController;

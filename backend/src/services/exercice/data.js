const Exercice = require('./model');
const ExamData = require('./../exam/data');

module.exports = {
  create: async (request, examId) => {
    const exam = await ExamData.getById(examId);
    const exerciceToSave = new Exercice(request);
    const exercice = await exerciceToSave.save();
    exam.exercices.push(exercice._id);
    await exam.save();
    return exercice;
  },
};

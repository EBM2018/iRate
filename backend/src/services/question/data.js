const Question = require('./model');
const ExerciceData = require('./../exercice/data');

module.exports = {
  create: async (request, exerciceId) => {
    const exercice = await ExerciceData.getById(exerciceId);
    const questionToSave = new Question(request);
    const question = await questionToSave.save();
    exercice.questions.push(question._id);
    await exercice.save();
    return question;
  },
};

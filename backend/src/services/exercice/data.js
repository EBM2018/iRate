const Exercice = require('./model');

module.exports = {
  create: async (request, exam) => {
    const exerciceToSave = new Exercice(request);
    const exercice = await exerciceToSave.save();
    exam.exercices.push(exercice._id);
    await exam.save();
    return exercice;
  },
  getById: async id => Exercice.findById(id),
};

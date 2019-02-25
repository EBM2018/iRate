const Question = require('./model');

module.exports = {
  create: async (request, exercice) => {
    const questionToSave = new Question(request);
    const maxOrder = Math.max(...exercice.questions.map(q => q.order));
    questionToSave.order = questionToSave.order || maxOrder + 1;
    const question = await questionToSave.save();
    exercice.questions.push(question._id);
    await exercice.save();
    return question;
  },
  getById: async id => Question.findById(id),
  update: async (_id, question) => Question.findOneAndUpdate({ _id }, question),
};

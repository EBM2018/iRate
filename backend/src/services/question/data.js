const Question = require('./model');

module.exports = {
  create: async (request, exercice) => {
    const questionToSave = new Question(request);
    const question = await questionToSave.save();
    exercice.questions.push(question._id);
    await exercice.save();
    return question;
  },
  update: async (_id, question) => Question.findOneAndUpdate({ _id }, question),
};

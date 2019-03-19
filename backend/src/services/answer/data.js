const Answer = require('./model');

module.exports = {
  create: async (request, copy) => {
    const answerToSave = new Answer(request);
    const answer = await answerToSave.save();
    copy.answers.push(answer._id);
    await copy.save();
    return answer;
  },
  update: async (_id, answer) => Answer.findOneAndUpdate({ _id }, answer),
  getById: _id => Answer.findById(_id),
};

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

  /**
   * Updates the order of the other questions that are contained
   * in the same exercice if it is needed
   * @param {Exercice} exercice the parent exercice that contains the questions
   * @param {Question} question the question that's being dragged and dropped
   * @param {number} newQuestionOrder the new order of the question that's being dragged and dropped
   */
  async updateOrderOfOtherQuestions(exercice, question, newQuestionOrder) {
    const promisesUpdateOrder = exercice.questions.map(async (syblingQuestion) => {
      // if it is a different question than the one we are updating
      // and if it has a higher order
      // then increment its order
      if (syblingQuestion._id !== question._id && syblingQuestion.order >= newQuestionOrder) {
        console.log('Sybling question to update', syblingQuestion.order);
        const newSyblingQuestion = syblingQuestion;
        newSyblingQuestion.order += 1;
        console.log('New Question order', newSyblingQuestion.order);
        await newSyblingQuestion.save();
      }
      return true;
    });
    // wait for all the questions to be updated
    await Promise.all(promisesUpdateOrder);
  },
};

const Exercice = require('./model');

module.exports = {
  create: async (request, exam) => {
    const exerciceToSave = new Exercice(request);
    const maxOrder = Math.max(...exam.exercices.map(ex => ex.order));
    exerciceToSave.order = exerciceToSave.order || maxOrder + 1;
    const exercice = await exerciceToSave.save();
    exam.exercices.push(exercice._id);
    await exam.save();
    return exercice;
  },
  getById: async id => Exercice.findById(id).populate('questions'),
  update: async (_id, exercice) => Exercice.findOneAndUpdate({ _id }, exercice),
  delete: async _id => Exercice.findByIdAndDelete(_id),


  /**
   * Updates the order of the other exercices that are contained
   * in the same exam if it is needed
   * @param {Exam} exam the parent exam that contains the exercices
   * @param {Exercice} exercice the exercice that's being dragged and dropped
   * @param {number} newExerciceOrder the new order of the exercice that's being dragged and dropped
   */
  async updateOrderOfOtherExercices(exam, exercice, newExerciceOrder) {
    const promisesUpdateOrder = exam.exercices.map(async (syblingExercice) => {
      // if it is a different exercice than the one we are updating
      // and if it has a higher order
      // then increment its order
      if (syblingExercice._id !== exercice._id && syblingExercice.order >= newExerciceOrder) {
        const newSyblingExercice = syblingExercice;
        newSyblingExercice.order += 1;
        await newSyblingExercice.save();
      }
      return true;
    });
    // wait for all the exercises to be updated
    await Promise.all(promisesUpdateOrder);
  },
};

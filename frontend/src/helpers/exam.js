import moment from "moment";

/**
 * Mutate an exam by adding the estimated timing and scale
 *
 * @param {Object} exam
 * @returns {Object}
 */
export const addTimeAndScale = exam => {
  let examScale = 0,
    examTime = 0,
    exerciceScale = 0,
    exerciceTime = 0;
  const clonedExam = JSON.parse(JSON.stringify(exam));

  if (!exam || !exam.exercices) return;

  for (let j = 0; j < clonedExam.exercices.length; j++) {
    for (let k = 0; k < clonedExam.exercices[j].questions.length; k++) {
      if (clonedExam.exercices[j].questions[k].scale) {
        examScale = examScale + clonedExam.exercices[j].questions[k].scale;
        exerciceScale = exerciceScale + clonedExam.exercices[j].questions[k].scale;
      }
      if (clonedExam.exercices[j].questions[k].estimatedTime) {
        examTime = examTime + clonedExam.exercices[j].questions[k].estimatedTime;
        exerciceTime = exerciceTime + clonedExam.exercices[j].questions[k].estimatedTime;
      }
    }

    clonedExam.exercices[j].estimatedTime = exerciceTime;
    clonedExam.exercices[j].scale = exerciceScale;
    exerciceTime = 0;
    exerciceScale = 0;
  }

  clonedExam.scale = examScale;
  clonedExam.estimatedTime = moment.utc(examTime * 1000).format('HH:mm:ss');

  return clonedExam;
};


/**
 * Sort an array of exam by it's session date.
 * If there is no session, the exam is put at the end (should not arrived thought)
 * @param {Array} exams
 * @returns {Array}
 */
export const sortExamsBySessionDate = exams => {
  return exams.sort((a, b) => {
    if (!a.session) {
      return 1;
    } else if (!b.session) {
      return -1;
    }
    if (moment(a.session.startingDate).isAfter(b.session.startingDate)) {
      return -1;
    } else return 1;
  });
};

export const filterPassedExams = (exams) => {
  return exams.filter(exam => {
    if (!exam.session) {
      return false;
    }
    return moment().isAfter(exam.session.finishingDate);
  });
};

export const filterNotPassedExams = (exams) => {
  return exams.filter(exam => {
    if (!exam.session) {
      return false;
    }
    return !moment().isAfter(exam.session.finishingDate);
  });
};

export const filterFinalisedExams = (exams) => {
  return exams.filter(exam => {
    return exam.isFinalised;
  });
};

export const filterNotFinalisedExams = (exams) => {
  return exams.filter(exam => {
    return !exam.isFinalised;
  });
};

export const filterExamsByDate = (exams, day) => {
  return exams.filter(exam => {
    if (!exam.session) {
      return false;
    }
    return moment(exam.session.startingDate).isSame(day, 'day');
  });
};

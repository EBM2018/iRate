import moment from 'moment';

/**
 * Mutate an exam by adding the estimated timing and scale
 *
 * @param {Object} exam
 * @returns {Object}
 */
export const addTimeAndScale = (exam) => {
    let examScale = 0,
        examTime = 0;
    const clonedExam = JSON.parse(JSON.stringify(exam));

    if (!exam || !exam.exercices)
        return;

    for (let j = 0; j < clonedExam.exercices.length; j++) {
        for (let k = 0; k < clonedExam.exercices[j].questions.length; k++) {
            if (clonedExam.exercices[j].questions[k].scale)
                examScale = examScale + clonedExam.exercices[j].questions[k].scale;
            if (clonedExam.exercices[j].questions[k].estimatedTime)
                examTime = examTime + clonedExam.exercices[j].questions[k].estimatedTime;
        }
    }

    clonedExam.scale = examScale;
    clonedExam.estimatedTime = moment.utc(examTime * 1000).format('HH:mm:ss');

    return clonedExam;
}